const Learner = require("../models/learner.model.js");
const Session = require("../models/session.model.js");

const getSessions = async (req, res, next) => {
  try {
    const learnerId = req.params.id;
    const learner = await Learner.findOne({ _id: learnerId, isActive: true });
    if (!learner) throw new Error("Learner ID is not valid");
    const sessions = await Session.find({
      "learners.learnerId": learnerId,
      isActive: true,
      isArchieved: false,
    });
    if (sessions.length === 0)
      return res
        .status(400)
        .status({ error: "No sessions are joined by this learner" });
    return res.status(200).json({ sessions });
  } catch (error) {
    next(error);
  }
};

const listMentors = async (req, res, next) => {
  try {
    const learnerId = req.params.id;
    const learner = await Learner.findOne({ _id: learnerId, isActive: true });
    if (!learner) throw new Error("Learner ID is not valid");
    const mentors = await Session.find({
      "learners.learnerId": learnerId,
    }).populate("mentorId", "name domain");
    return res.status(200).json({ mentors });
  } catch (error) {
    next(error);
  }
};

const getActiveLearnersWithMoreThan3Sessions = async (req, res, next) => {
  try {
    const sessions = await Session.find({
      isActive: true,
      isArchived: false,
    }).select("learners");

    const attendanceCount = {};

    sessions.forEach((session) => {
      session.learners.forEach((id) => {
        const learnerId = id.toString();
        attendanceCount[learnerId] = (attendanceCount[learnerId] || 0) + 1;
      });
    });

    const learnerIds = Object.keys(attendanceCount).filter(
      (id) => attendanceCount[id] > 3
    );

    const learners = await Learner.find({ _id: { $in: learnerIds } });

    res.status(200).json({
      message: "Learners with more than 3 sessions",
      count: learners.length,
      learners,
    });
  } catch (error) {
    next(error);
  }
};

const softDelete = async (req, res, next) => {
  try {
    const learnerId = req.params.id;
    await Learner.findByIdAndUpdate(learnerId, { isActive: false });
    await Session.updateMany(
      { "learners.learnerId": learnerId },
      { $set: { "learners.$[elem].attendance": false } },
      { arrayFilters: [{ "elem.learnerId": learnerId }] }
    );
    res.status(200).json({ msg: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSessions,
  listMentors,
  getActiveLearnersWithMoreThan3Sessions,
  softDelete,
};

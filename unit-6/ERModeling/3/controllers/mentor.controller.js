const Mentor = require("../models/mentor.model.js");
const Session = require("../models/session.model.js");

const getSessions = async (req, res, next) => {
  try {
    const mentorId = req.params.id;
    const mentor = await Mentor.findOne({ _id: mentorId, isActive: true });
    if (!mentor) throw new Error("Mentor id is not valid");
    const sessions = await Session.find({
      mentorId,
      isActive: true,
      isArchieved: false,
    });
    if (sessions.length === 0)
      return res
        .status(400)
        .json({ error: "No sessions scheduled for this mentor" });
    return res.status(200).json({ sessions });
  } catch (error) {
    next(error);
  }
};

const getCountOfAttendedLearners = async (req, res, next) => {
  try {
    const mentorId = req.params.id;
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) throw new Error("Mentor id is not valid");
    const count = await Session.find({ mentorId }).countDocuments();
    return res.status(200).json({ count });
  } catch (error) {
    next(error);
  }
};

const getMentorsWithoutActiveSessions = async (req, res, next) => {
  try {
    const mentorsWithActiveSessions = await Session.distinct("mentorId", {
      isActive: true,
      isArchived: false,
    });

    const mentors = await Mentor.find({
      _id: { $nin: mentorsWithActiveSessions },
      isActive: true,
    });

    res.status(200).json({ count: mentors.length, mentors });
  } catch (error) {
    next(error);
  }
};

const softDelete = async (req, res, next) => {
  try {
    const mentorId = req.params.id;
    await Mentor.findByIdAndUpdate(mentorId, { isActive: false });
    await Session.updateMany({ mentorId }, { $set: { isActive: false } });
    res.status(200).json({ msg: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSessions,
  getCountOfAttendedLearners,
  getMentorsWithoutActiveSessions,
  softDelete,
};

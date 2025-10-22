const Session = require("../models/session.model.js");

const recentSessions = async (req, res, next) => {
  try {
    const sessions = await Session.find({ isActive: true, isArchieved: false })
      .sort({ time: -1 })
      .limit(5);
    if (sessions.length === 0)
      return res.status(400).json({ error: "No sessions available" });
    return res.status(200).json({ sessions });
  } catch (error) {
    next(error);
  }
};

const listLearners = async (req, res, next) => {
  try {
    const sessionId = req.params.id;
    const learners = await Session.findOne({
      _id: sessionId,
    }).populate("learners");
    if (!learners)
      return res.status(400).json({ error: "No learners have joined yet" });
    return res.status(200).json({ learners });
  } catch (error) {
    next(error);
  }
};

const softDelete = async (req, res, next) => {
  try {
    await Session.findByIdAndUpdate(req.params.id, { isArchieved: true });
    res.status(200).json({ msg: "success" });
  } catch (error) {
    next(error);
  }
};

module.exports = { recentSessions, listLearners, softDelete };

export const validateSignUp = (req, res, next) => {
  try {
    if (!req.body)
      return res.status(400).json({ error: "Inputs not provided for signup" });
    const { email, password, role } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Emial or password is empty" });
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ error: "Invalid email format" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    let user = { email, password, role };
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

export const validateLogin = (req, res, next) => {
  try {
    if (!req.body)
      return res.status(400).json({ error: "Inputs not provided for login" });
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ error: "Emial or password is empty" });
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email))
      return res.status(400).json({ error: "Invalid email format" });
    if (password.length < 6)
      return res
        .status(400)
        .json({ error: "Password must be at least 6 characters" });
    let user = { email, password };
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

import crypto from "crypto";

export const generateHashCryptoToken = () => {
  try {
    const resetToken = crypto.randomBytes(32).toString("hex");
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");
    return { resetToken, hashedToken };
  } catch (error) {
    console.log(error);
  }
};

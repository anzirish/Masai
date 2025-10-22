const express = require("express");
const nodemailer = require("nodemailer");
const content = require("./content.js");

const app = express();

app.get("/sendemail", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anzirish@gmail.com",
        pass: "kblf qibt nldg ubik", // has been revoked
      },
    });

    await transporter.verify();
    console.log("Server is ready to transmeet the messages");

    const mailOptions = {
      from: "Vipin Dev <anzirish@gmail.com>",
      to: "venugopal.burli@masaischool.com",
      subject: "NEM Student test mail",
      html: content,
    };

    await transporter.sendMail(mailOptions);
    res.json({ msg: "success" });
  } catch (error) {
    res.json({ error: `Error while sending mail, ${error.message}` });
  }
});

app.listen(3000, () => console.log("listening..."));

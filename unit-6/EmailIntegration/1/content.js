const content = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>NEM Test Mail</title>
  <style>
    body {
      background-color: #f5f7fa;
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
      margin: 0;
      padding: 0;
      color: #333;
    }
    .email-container {
      max-width: 600px;
      margin: 40px auto;
      background-color: #ffffff;
      border-radius: 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #2563eb, #3b82f6);
      color: white;
      text-align: center;
      padding: 20px;
    }
    .header h1 {
      margin: 0;
      font-size: 22px;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 30px 25px;
      line-height: 1.6;
      font-size: 16px;
    }
    .content p {
      margin-bottom: 18px;
    }
    .highlight-box {
      background: #f1f5f9;
      border-left: 4px solid #3b82f6;
      padding: 15px;
      border-radius: 6px;
      color: #111827;
    }
    .footer {
      background-color: #f9fafb;
      text-align: center;
      padding: 15px;
      font-size: 13px;
      color: #6b7280;
    }
  </style>
</head>
<body>
  <div class="email-container">
    <div class="header">
      <h1>NEM Student Test Mail</h1>
    </div>

    <div class="content">
      <p>Dear Instructor,</p>

      <p>
        I hope this message finds you well. This email is being sent as part of Node.js and Express assignment using
        <strong>Nodemailer</strong>.
      </p>

      <div class="highlight-box">
        <p><strong>This is a testing Mail sent by NEM student, no need to reply.</strong></p>
      </div>

      <p>Best regards,<br><strong>Vipin Dev</strong></p>
    </div>

    <div class="footer">
      <p>© 2025 NEM Student | Sent via Node.js + Nodemailer</p>
    </div>
  </div>
</body>
</html>

`

module.exports = content
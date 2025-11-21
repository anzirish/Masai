interface Notificiation {
  send(msg: string): void;
}

class EmailNotification implements Notificiation {
  send(msg: string): void {
    console.log(`Sending EMAIL : ${msg}`);
  }
}

class SMSNotification implements Notificiation {
  send(sms: string): void {
    console.log(`${sms}`);
  }
}

class PushNotiication implements Notificiation {
  send(notification: string): void {
    console.log(`You have a notification: ${notification}`);
  }
}

class NotificiationFactory {
  static createNotication(type: string) {
    if (type === "Email") {
      return new EmailNotification();
    }
    if (type === "SMS") {
      return new SMSNotification();
    }
    if (type === "PUSH") {
      return new PushNotiication();
    }
  }
}

const notifier = NotificiationFactory.createNotication("Email");
notifier?.send("Welcome!"); // Sending EMAIL: Welcome!

const smsNotifier = NotificiationFactory.createNotication("SMS");
smsNotifier?.send("Your OTP is 123456"); // Sending SMS: Your OTP is 123456

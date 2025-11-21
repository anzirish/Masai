"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailNotification {
    send(msg) {
        console.log(`Sending EMAIL : ${msg}`);
    }
}
class SMSNotification {
    send(sms) {
        console.log(`${sms}`);
    }
}
class PushNotiication {
    send(notification) {
        console.log(`You have a notification: ${notification}`);
    }
}
class NotificiationFactory {
    static createNotication(type) {
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
//# sourceMappingURL=index.js.map
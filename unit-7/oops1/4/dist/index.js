"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    username;
    constructor(username) {
        this.username = username;
    }
}
class Admin extends User {
    constructor(username) {
        super(username);
    }
    showUsername() {
        console.log("USername is ", this.username);
    }
}
const admin = new Admin("tanishq");
admin.showUsername();
//# sourceMappingURL=index.js.map
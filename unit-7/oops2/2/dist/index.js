"use strict";
// Q4
Object.defineProperty(exports, "__esModule", { value: true });
class PolyDuck {
    fly() {
        console.log("I can fly");
    }
}
class DesiDuck extends PolyDuck {
    fly() {
        console.log("Desi duck flying at 10kmph");
    }
}
class VidesiDuck extends PolyDuck {
    fly() {
        console.log("Videsi duck flying at 20kmph");
    }
}
class SmartDuck extends PolyDuck {
    fly() {
        console.log("Smart duck flying at 50kmph");
    }
}
function makeDuckFly(duck) {
    duck.fly();
}
makeDuckFly(new DesiDuck());
makeDuckFly(new VidesiDuck());
makeDuckFly(new SmartDuck());
//Q5
class User {
    name;
    orgCode = "DuckCorp";
    role;
    constructor(name, role) {
        this.name = name;
        this.role = role;
    }
    introduce() {
        console.log(`I'm ${this.name} from ${this.orgCode}`);
    }
}
class Manager extends User {
    getRole() {
        console.log(`My role is ${this.role}`);
    }
}
const user = new User("tanishq", "admin");
const manager = new Manager("naina", "manager");
user.introduce();
manager.getRole();
manager.introduce();
console.log(manager.orgCode); // compile time error
//# sourceMappingURL=index.js.map
"use strict";
// Q1
Object.defineProperty(exports, "__esModule", { value: true });
class Duck {
    swim() {
        console.log("I know swimming...");
    }
}
class MallarDuck extends Duck {
}
const duck = new MallarDuck();
duck.swim();
// Q2
class Bird {
    fly() {
        console.log("I can fly");
    }
}
class Penguin extends Bird {
    fly() {
        console.log("I can't fly");
    }
}
const bird = new Bird();
const penguin = new Penguin();
bird.fly();
penguin.fly();
class ToyDuck {
    swim() {
        console.log("Cannot fly");
    }
    fly() {
        console.log("Can not sound");
    }
    sound() {
        console.log("Can float on water");
    }
}
const toyDuck = new ToyDuck();
toyDuck.swim();
toyDuck.fly();
toyDuck.sound();
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FastFly {
    fly() {
        console.log("Flying fast like robo");
    }
}
class NoFly {
    fly() {
        console.log("I can't fly");
    }
}
class Duck {
    flyStategy;
    constructor(flyStrategy) {
        this.flyStategy = flyStrategy;
    }
    setFlyStrategy(flyStrategy) {
        this.flyStategy = flyStrategy;
    }
    performFly() {
        this.flyStategy.fly();
    }
}
const duck = new Duck(new FastFly());
duck.performFly();
duck.setFlyStrategy(new NoFly());
duck.performFly();
//# sourceMappingURL=index.js.map
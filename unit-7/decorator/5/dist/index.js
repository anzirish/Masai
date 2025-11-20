"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beverage {
}
class Coffee extends Beverage {
    getDescription() {
        return "Green Tea";
    }
    getCost() {
        return 15;
    }
}
class BeverageDecorator extends Beverage {
    beverage;
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
}
class WhippedCream extends BeverageDecorator {
}
class Honey extends BeverageDecorator {
    getDescription() {
        return this.beverage.getDescription() + " Honey";
    }
    getCost() {
        return this.beverage.getCost() + 10;
    }
}
class Sugar extends BeverageDecorator {
    getDescription() {
        return this.beverage.getDescription() + " Sugar";
    }
    getCost() {
        return this.beverage.getCost() + 20;
    }
}
const myDrink = new WhippedCream(new Honey(new Sugar(new Coffee())));
console.log(myDrink.getDescription()); // Coffee + Sugar + Honey + WhippedCream
console.log(myDrink.getCost()); // 50 + 10 + 20 + 15 = 95
//# sourceMappingURL=index.js.map
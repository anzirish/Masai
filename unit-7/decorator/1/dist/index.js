"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beverage {
}
class GreenTea extends Beverage {
    getDescription() {
        return "Green Tea";
    }
    getCost() {
        return 40;
    }
}
class BeverageDecorator extends Beverage {
    beverage;
    constructor(beverage) {
        super();
        this.beverage = beverage;
    }
}
class Sugar extends BeverageDecorator {
    getDescription() {
        return this.beverage.getDescription() + " Sugar";
    }
    getCost() {
        return this.beverage.getCost() + 10;
    }
}
const tea = new Sugar(new GreenTea());
console.log(tea.getDescription()); // Green Tea
console.log(tea.getCost()); // 40
//# sourceMappingURL=index.js.map
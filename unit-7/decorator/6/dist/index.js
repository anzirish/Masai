"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Beverages {
}
class Espresso extends Beverages {
    getDescription() {
        return "Espresso";
    }
    getCost() {
        return 80;
    }
}
class LemonTea extends Beverages {
    getDescription() {
        return "LemonTea";
    }
    getCost() {
        return 40;
    }
}
class BeverageDecorators extends Beverages {
    beverages;
    constructor(beverages) {
        super();
        this.beverages = beverages;
    }
}
class Honey extends BeverageDecorators {
    getDescription() {
        return this.beverages.getDescription() + " + Honey";
    }
    getCost() {
        return this.beverages.getCost() + 20;
    }
}
class Sugar extends BeverageDecorators {
    getDescription() {
        return this.beverages.getDescription() + " + Sugar";
    }
    getCost() {
        return this.beverages.getCost() + 10;
    }
}
class WhippedCream extends BeverageDecorators {
    getDescription() {
        return this.beverages.getDescription() + " + WhippedCream";
    }
    getCost() {
        return this.beverages.getCost() + 15;
    }
}
const order1 = new Honey(new WhippedCream(new Espresso()));
const order2 = new Sugar(new Sugar(new LemonTea()));
console.log("Order 1:", order1.getDescription()); // Espresso + WhippedCream + Honey
console.log("Cost 1: ₹", order1.getCost()); // 80 + 15 + 20 = ₹115
console.log("Order 2:", order2.getDescription()); // LemonTea + Sugar + Sugar
console.log("Cost 2: ₹", order2.getCost()); // 40 + 10 + 10 = ₹60
//# sourceMappingURL=index.js.map
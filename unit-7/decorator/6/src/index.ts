abstract class Beverages {
  abstract getDescription(): string;
  abstract getCost(): number;
}

class Espresso extends Beverages {
  getDescription(): string {
    return "Espresso";
  }
  getCost(): number {
    return 80;
  }
}

class LemonTea extends Beverages {
  getDescription(): string {
    return "LemonTea";
  }
  getCost(): number {
    return 40;
  }
}

abstract class BeverageDecorators extends Beverages {
  protected beverages: Beverages;
  constructor(beverages: Beverages) {
    super();
    this.beverages = beverages;
  }
}

class Honey extends BeverageDecorators {
  getDescription(): string {
    return this.beverages.getDescription() + " + Honey";
  }
  getCost(): number {
    return this.beverages.getCost() + 20;
  }
}

class Sugar extends BeverageDecorators {
  getDescription(): string {
    return this.beverages.getDescription() + " + Sugar";
  }
  getCost(): number {
    return this.beverages.getCost() + 10;
  }
}

class WhippedCream extends BeverageDecorators {
  getDescription(): string {
    return this.beverages.getDescription() + " + WhippedCream";
  }
  getCost(): number {
    return this.beverages.getCost() + 15;
  }
}

const order1 = new Honey(new WhippedCream(new Espresso()));
const order2 = new Sugar(new Sugar(new LemonTea()));

console.log("Order 1:", order1.getDescription()); // Espresso + WhippedCream + Honey
console.log("Cost 1: ₹", order1.getCost()); // 80 + 15 + 20 = ₹115

console.log("Order 2:", order2.getDescription()); // LemonTea + Sugar + Sugar
console.log("Cost 2: ₹", order2.getCost()); // 40 + 10 + 10 = ₹60

abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}

class Coffee extends Beverage {
  getDescription(): string {
    return "Green Tea";
  }
  getCost(): number {
    return 15;
  }
}

abstract class BeverageDecorator extends Beverage {
  protected beverage: Beverage;
  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }
}
class WhippedCream extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " WhippedCream";
  }
  getCost(): number {
    return this.beverage.getCost() + 50;
  }
}
class Honey extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " Honey";
  }
  getCost(): number {
    return this.beverage.getCost() + 10;
  }
}

class Sugar extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " Sugar";
  }
  getCost(): number {
    return this.beverage.getCost() + 20;
  }
}

const myDrink = new WhippedCream(new Honey(new Sugar(new Coffee())));
console.log(myDrink.getDescription()); // Coffee + Sugar + Honey + WhippedCream
console.log(myDrink.getCost());        // 50 + 10 + 20 + 15 = 95


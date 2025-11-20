abstract class Beverage {
  abstract getDescription(): string;
  abstract getCost(): number;
}

class GreenTea extends Beverage {
  getDescription(): string {
    return "Green Tea";
  }
  getCost(): number {
    return 40;
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
    return this.beverage.getCost() + 20;
  }
}

class Sugar extends BeverageDecorator {
  getDescription(): string {
    return this.beverage.getDescription() + " Sugar";
  }
  getCost(): number {
    return this.beverage.getCost() + 10;
  }
}

const tea = new Honey(new Sugar(new GreenTea()));
console.log(tea.getDescription()); // Green Tea + Sugar + Honey
console.log(tea.getCost());        // 70




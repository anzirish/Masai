interface IShippingStrategy {
  calculate(): number;
}

class StandardShipping implements IShippingStrategy {
  calculate(): number {
    return 50;
  }
}

class ExpressShipping implements IShippingStrategy {
  calculate(): number {
    return 100;
  }
}

class Shipping {
  shippingStrategy: IShippingStrategy;
  constructor(shippingStrategy: IShippingStrategy) {
    this.shippingStrategy = shippingStrategy;
  }
  cauculate() {
    this.shippingStrategy.calculate();
  }
}

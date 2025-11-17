interface IFlyStrategy {
  fly(): void;
}

class FastFly implements IFlyStrategy {
  fly(): void {
    console.log("Flying fast like robo");
  }
}

class NoFly implements IFlyStrategy {
  fly(): void {
    console.log("I can't fly");
  }
}

class Duck {
  flyStategy: IFlyStrategy;
  constructor(flyStrategy: IFlyStrategy) {
    this.flyStategy = flyStrategy;
  }
  setFlyStrategy(flyStrategy: IFlyStrategy) {
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

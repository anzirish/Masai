class Engine {
  start() {
    console.log("Engine started");
  }
}

class Car {
  engine: Engine = new Engine();

  drive() {
    this.engine.start();
    console.log("car is driving");
  }
}

const car = new Car()
car.drive()
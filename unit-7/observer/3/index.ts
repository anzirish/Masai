interface IEngine {
  start(): void;
}

class PetrolEngine implements IEngine {
  start(): void {
    console.log("Petrol engine started");
  }
}

class Car3 {
  constructor(engine: IEngine) {
    engine.start();
  }
}

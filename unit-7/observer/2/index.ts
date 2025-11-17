interface IVehicle {
  start(): void;
}

class Driver {
  constructor(vehicle: IVehicle) {
    vehicle.start();
    console.log("Driving...");
  }
}

class Car2 implements IVehicle {
  start(): void {
    console.log("Car is starting");
  }
}

class Bike implements IVehicle {
  start(): void {
    console.log("Bike is starting");
  }
}

const driver = new Driver(new Car2());
const driver2 = new Driver(new Bike());

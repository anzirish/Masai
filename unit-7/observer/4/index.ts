interface IVehicle {
  start(): void;
}

class Driver2 {
  vehicle: IVehicle;

  constructor(vehicle: IVehicle) {
    this.vehicle = vehicle;
    vehicle.start();
    console.log("Driving...");
  }

  setVehicle(vehicle: IVehicle) {
    this.vehicle = vehicle;
    vehicle.start();
  }
}

class Car22 implements IVehicle {
  start(): void {
    console.log("Car is starting");
  }
}

class Bike1 implements IVehicle {
  start(): void {
    console.log("Bike is starting");
  }
}

const driver11 = new Driver2(new Car22());
const driver22 = new Driver2(new Bike1());

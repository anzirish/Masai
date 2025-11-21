interface Vehicle {
  getDetails(): string;
}

class Bike implements Vehicle {
  constructor(private vehicleName: string) {}
  getDetails(): string {
    return `Bike: ${this.vehicleName}`;
  }
}

class Car implements Vehicle {
  constructor(private vehicleName: string) {}
  getDetails(): string {
    return `Car: ${this.vehicleName}`;
  }
}

class VehicleFactory {
  static createVehicle(vehicleType: string, vehicleName: string) {
    if (vehicleType === "Bike") return new Bike(vehicleName);
    if (vehicleType === "Car") return new Car(vehicleName);
    return undefined;
  }
}

const myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
const myCar = VehicleFactory.createVehicle("Car", "Toyota");

console.log(myBike?.getDetails());
console.log(myCar?.getDetails());

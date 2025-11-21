"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bike {
    vehicleName;
    constructor(vehicleName) {
        this.vehicleName = vehicleName;
    }
    getDetails() {
        return `Bike: ${this.vehicleName}`;
    }
}
class Car {
    vehicleName;
    constructor(vehicleName) {
        this.vehicleName = vehicleName;
    }
    getDetails() {
        return `Car: ${this.vehicleName}`;
    }
}
class VehicleFactory {
    static createVehicle(vehicleType, vehicleName) {
        if (vehicleType === "Bike")
            return new Bike(vehicleName);
        if (vehicleType === "Car")
            return new Car(vehicleName);
        return undefined;
    }
}
const myBike = VehicleFactory.createVehicle("Bike", "Yamaha");
const myCar = VehicleFactory.createVehicle("Car", "Toyota");
console.log(myBike?.getDetails());
console.log(myCar?.getDetails());
//# sourceMappingURL=index.js.map
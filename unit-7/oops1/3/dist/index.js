"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    brand;
    speed;
    constructor(brand, speed) {
        this.brand = brand;
        this.speed = speed;
    }
    drive = () => {
        console.log(`Driving at ${this.speed}Km/h`);
    };
}
class Car extends Vehicle {
    fuelType;
    constructor(brand, speed, fuelType) {
        super(brand, speed);
        this.fuelType = fuelType;
    }
    refuel() {
        console.log(`Refuling ${this.fuelType}`);
    }
}
const car = new Car("BMW", 99, "Organic");
car.drive();
car.refuel();
//# sourceMappingURL=index.js.map
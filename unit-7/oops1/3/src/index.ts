class Vehicle {
  brand: string;
  speed: number;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  drive = (): void => {
    console.log(`Driving at ${this.speed}Km/h`);
  };
}

class Car extends Vehicle {
  fuelType: string;
  constructor(brand: string, speed: number, fuelType: string) {
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

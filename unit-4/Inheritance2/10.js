function Car(make, model, year, isAvailable = true) {
  (this.make = make),
    (this.model = model),
    (this.year = year),
    (this.isAvailable = isAvailable);
}

function Customer(name, renterCars = []) {
  (this.name = name), (this.renterCars = renterCars);
}

Customer.prototype.rentCar = function (car) {
  if (car.isAvailable) {
    car.isAvailable = false;
    this.renterCars.push(car);
    console.log(`${car.model} has been rent by ${this.name}`);
  } else {
    console.log("Car is already rented");
  }
};

function PremiumCustomer(name, rentedCars, dicountRate) {
  Customer.call(this, name, rentedCars);
  this.dicountRate = dicountRate;
}

PremiumCustomer.prototype = Object.create(Customer.prototype)

PremiumCustomer.prototype.constructor = PremiumCustomer

function calculateRentalPrice(car) {
  let basePrice = 50;
  let suvRate = basePrice * 5;
  let sedanRate = basePrice * 10;
  let bmwRate = basePrice * 8;

  if (car.model == "suv") {
    return suvRate * car;
  } else if (car.model == "sedan") {
    return sedanRate;
  } else if (car.model == "bmw") {
    return bmwRate;
  } else {
    return basePrice;
  }
}

Customer.prototype.returnCar = function (car) {
  setTimeout(() => {
    car.isAvailable = true;
    let idx = this.renterCars.indexOf(car);
    this.renterCars.splice(idx, 1);
  }, 2000);
  console.log(`${car.model} returned`);
};

function Maintenance(car) {
  setTimeout(() => {
    car.isAvailable = true;
  }, 1000);
  console.log(`${car.model} went for maintaince`);
}

let car1 = new Car("ok", "suv", 2009);
let car2 = new Car("nok", "sedan", 2023);
let car3 = new Car("oknok", "bmw", 2239);

let regular = new Customer("Tanishq", [car1]);
let premium = new PremiumCustomer("Priya", [car3], 50);

regular.rentCar(car2);
let rentalPrice = calculateRentalPrice(car3);
console.log(rentalPrice);
regular.returnCar(car1);
Maintenance(car3);

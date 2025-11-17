// Q1

class Duck {
  swim() {
    console.log("I know swimming...");
  }
}

class MallarDuck extends Duck {}

const duck = new MallarDuck();
duck.swim();

// Q2

class Bird {
  fly() {
    console.log("I can fly");
  }
}

class Penguin extends Bird {
  fly(): void {
    console.log("I can't fly");
  }
}

const bird = new Bird();
const penguin = new Penguin();

bird.fly();
penguin.fly();

// Q3

interface IDuck {
  swim(): void;
  fly(): void;
  sound(): void;
}

class ToyDuck implements IDuck {
  swim(): void {
    console.log("Cannot fly");
  }
  fly(): void {
    console.log("Can not sound");
  }
  sound(): void {
    console.log("Can float on water");
  }
}

const toyDuck = new ToyDuck();
toyDuck.swim();
toyDuck.fly();
toyDuck.sound();

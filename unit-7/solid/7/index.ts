class Animal {
  makeSound(): void {
    console.log("Some sound");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Bark!");
  }
}

function makeAnimalSound(animal: Animal) {
  animal.makeSound();
}

const dog = new Dog();
const animal = new Animal();
makeAnimalSound(dog);
makeAnimalSound(animal);

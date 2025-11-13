class Person {
  walk() {
    console.log("Walking...");
  }
}

interface Icoder {
  code(): void;
}

class Developer extends Person implements Icoder {
  code(): void {
    console.log("Coding...");
  }
}

const dev = new Developer();
dev.walk();
dev.code();

interface IFlyble {
  fly(): void;
}

class Bird {}

class Ostrich extends Bird implements IFlyble {
  fly(): void {
    console.log("Ostriches can't fly");
  }
}

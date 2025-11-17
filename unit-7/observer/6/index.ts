interface IObserver {
  update(): void;
}

class SmartPhone implements IObserver {
  update(): void {
    console.log("Receiveḍ notification on phone");
  }
}

class Tablet implements IObserver {
  update(): void {
    console.log("Receiveḍ notification on tablet");
  }
}

class NotificationCenter {
  observers: IObserver[] = [];
  attach(observer: IObserver) {
    this.observers.push(observer);
    console.log("Observer added ", observer);
  }
  detaich(observer: IObserver) {
    this.observers.filter((obsr) => obsr != observer);
    console.log("Observer removed ", observer);
  }
  notify() {
    this.observers.forEach((o) => o.update());
  }
}

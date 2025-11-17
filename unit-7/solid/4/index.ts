interface IPrintStrategy {
  print(): void;
}

interface ISmartPrintFaxStrategy {
  scan(): void;
  fax(): void;
}

class OldPrinter implements IPrintStrategy {
  print(): void {
    console.log("I can print");
  }
}

class SmartPrinter implements ISmartPrintFaxStrategy {
  scan(): void {
    console.log("I can scan");
  }
  fax(): void {
    console.log("I can fax");
  }
}

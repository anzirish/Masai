interface IPaymentStrategy {
  pay(amount: number): void;
}

class CardPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log("Processing paymeny through Card ", amount);
  }
}

class UPIPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log("Processing paymeny through UPI ", amount);
  }
}

class BitcoinPayment implements IPaymentStrategy {
  pay(amount: number): void {
    console.log("Processing paymeny through Bitcoin ", amount);
  }
}

class Payment {
  strategy: IPaymentStrategy;
  constructor(private paymentMethod: IPaymentStrategy) {
    this.strategy = paymentMethod;
  }
  setStrategy(paymentMethod: IPaymentStrategy) {
    this.strategy = paymentMethod;
  }
  process(amount: number) {
    this.paymentMethod.pay(amount);
  }
}

const payment = new Payment(new CardPayment());
payment.process(1000);

payment.setStrategy(new BitcoinPayment());
payment.process(2000);

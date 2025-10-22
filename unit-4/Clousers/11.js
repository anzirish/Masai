function outerfunction() {
  let message = "Hello";

  return function innerFunction(name = "Neha") {
    let updatedMessage = message + " " + name;

    return updatedMessage;
  };
}

let result = outerfunction();
console.log(result("Tanishq"));
console.log(outerfunction()())

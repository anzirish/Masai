export const factorial = (input) => {
  if (!Number.isInteger(input)) {
    return `${input} is not an int number`;
  }

  if (input < 0) {
    return "Factorial is not defined for number less than 0";
  }

  let result = 1;

  for (let i = 2; i <= input; i++) {
    result *= i;
  }

  return `The factorial of ${input} is : ${result}`;
};

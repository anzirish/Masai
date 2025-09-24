export const isPrime = (num) => {

  if (!Number.isInteger(num)) {
    return "Input must be a integer to validate prime";
  }

  if (num < 2) {
    return `${num} is not a prime number`;
  }

  if (num == 2 || num == 3) {
    return `${num} is a prime number`;
  }

  if (num % 2 == 0 || num % 3 == 0) {
    return `${num} is not a prime number`;
  }

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return `${num} is not a prime number`;
    }
  }

  return `${num} is a prime number`;
};
function getEvenSquares(nums) {
  return nums.filter((num) => num % 2 === 0).map((num) => num ** 2);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = getEvenSquares(numbers);
console.log(result); // [4, 16, 36]

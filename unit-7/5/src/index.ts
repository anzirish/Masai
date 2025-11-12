const getSum = (nums: number[]): number => {
  let totalSum: number = 0;
  nums.forEach((n: number) => {
    if (n % 2 === 0) totalSum += n;
  });
  return totalSum;
};

console.log(getSum([4, 3, 2, 6]));

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 == 0);
}

function sumOfArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

function sortAndConcat(arr1, arr2) {
  return arr1.sort().concat(arr2.sort()).sort();
}

let arr1 = [4, 5, 6, 3, 2, 1, 9];
let arr2 = [4, 3, 2, 6, 7, 8, 0];

console.log(filterEvenNumbers(arr1));
console.log(sumOfArray(arr1));
console.log(sortAndConcat(arr1, arr2));

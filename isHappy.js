function isHappy(num) {
  let hasSeen = new Set();

  while (num !== 1 && !hasSeen.has(num)) {
    hasSeen.add(num);

    let sumOfSqure = 0;

    while (num > 0) {
      let rem = num % 10;
      sumOfSqure = sumOfSqure + rem ** 2;

      num = Math.floor(num / 10);
    }

    num = sumOfSqure;
  }

  if(num ===1 ) return true
  return false;
}

console.log(isHappy(19));

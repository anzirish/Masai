function checkEvenNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (number % 2 == 0) {
        resolve(`${number} is even`);
      } else {
        reject(`${number} is odd or invalid`);
      }
    });
  });
}

checkEvenNumber(4).then(console.log).catch(console.error);  // Expected: "4 is even"  
checkEvenNumber(5).then(console.log).catch(console.error);  // Expected: "5 is odd or invalid"

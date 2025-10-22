function getCharacterFrequency(string) {
  return string
    .trim()
    .toLowerCase()
    .split("")
    .filter((char) => char != " ")
    .reduce((acc, char) => {
      acc[char] = (acc[char] || 0) + 1;
      return acc;
    }, {});
}

const str = " Hello World! ";
const result = getCharacterFrequency(str);
console.log(result);
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1, '!': 1 }

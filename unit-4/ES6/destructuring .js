const people = [
  {
    name: "Alice",
    address: {
      city: "New York",
      street: { street_name: "Broadway", number: 123 },
    },
  },
  {
    name: "Bob",
    address: {
      city: "Los Angeles",
      street: { street_name: "Sunset Boulevard", number: 456 },
    },
  },
];

function destruct(people) {
  let result = [];
  for (const {
    name,
    address: {
      city,
      street: { street_name },
    },
  } of people) {
    let str_result = `${name} lives in ${city} on ${street_name}`;
    result.push(str_result);
  }
  return result;
}

console.log(destruct(people));

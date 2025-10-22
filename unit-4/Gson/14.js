function convertToJson(user) {
  let json = JSON.stringify(user);
  return json;
}

function convertToObject(userJson) {
  return JSON.parse(userJson);
}

let user = {
  name: "Tanishq",
  age: 20,
  email: "masai@masaischool.com",
  isAdmin: false,
};

let jsonValue = convertToJson(user);
let object = convertToObject(jsonValue);

for (let [key, value] of Object.entries(object)) {
  console.log(`${key} : ${value}`);
}

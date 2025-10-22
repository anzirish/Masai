function processProducts(products) {
  products
    .map((product) => product.name)
    .forEach((name, index) => {
      if (products[index].price > 50) {
        console.log(`${name} is above $50`);
      } else {
        console.log(`${name} is below $50`);
      }
    });
}

let products = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
];
processProducts(products);

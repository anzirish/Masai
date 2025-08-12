function createInventoryItem(name, category, price) {
  return {
    name: name,
    category: category,
    price: price,
    describeItem: function () {
      console.log(`Item : ${name}, Category : ${category}, Price : ${price}`);
    },
  };
}

function addItemDiscount(item, discountPercent) {
  return {
    discountedPrice: 0,
    applyDiscount: function () {
      this.discountedPrice = item.price - (item.price * discountPercent) / 100;
      console.log(`Discounted price for ${item.name} ${this.discountedPrice}`);
    },
  };
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();
// Output: Item: Laptop, Category: Electronics, Price: 1500

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();
// Output: Discounted Price for Laptop: 1350

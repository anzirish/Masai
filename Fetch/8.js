// Create asynce function as it will perform an asynchronous opearation
async function fetchData() {
  // Wrapped the api call inside the try block to avoid unexpectd errord

  try {
    let response = await fetch("https://fakestoreapi.com/products");

    // Check if api fetch is successful

    if (!response.ok) {
      console.log("Failed to fetch products. Please try again later");
      return;
    }

    // converting the responswe data in json

    let users = await response.json();

    // displaying data with title and price

    for (let user of users) {
      console.log(`[${user.title}] : [${user.price}]`);
    }

    // calculating total price

    let price = users.reduce((acc, user) => acc + user.price, 0);

    console.log(`Total price : ${price}`);
    // Catch block to catch triggered error
  } catch (error) {
    console.log(error);
  }
}

fetchData();

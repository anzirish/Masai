fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((response) => {
    for (let user of response) {
      console.log(user.name);
    }
  });

function fetchData() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNumber = Math.random();
      let success = randomNumber > 0.5;

      if (success) {
        resolve("Fetched data successfully!");
      } else {
        reject("Error");
      }
    }, 1000);
  });
  return promise;
}

async function fetchDataHandler() {
  try {
    let reponse = await fetchData();
    console.log(reponse);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

fetchDataHandler();
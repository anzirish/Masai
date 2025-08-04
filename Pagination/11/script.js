document.addEventListener("DOMContentLoaded", fetchApi);
const API_BASE_URL =
  "https://dfdsfgdgdf-a2a80-default-rtdb.asia-southeast1.firebasedatabase.app/members.json";
const container = document.getElementById("gallery");

async function fetchApi() {
  try {
    const reposnse = await fetch(API_BASE_URL);
    if (reposnse.ok) {
      const data = await reposnse.json();
      const users = Object.entries(data).map(([id, item]) => ({
        id,
        ...item,
      }));
      displayImages(users)
    }
  } catch (error) {
    console.log(error);
  }
}

function displayImages(users) {
  users.forEach((user) => {
    const img = document.createElement("img");
    img.src = user.avatar;
    container.appendChild(img);
  });
}

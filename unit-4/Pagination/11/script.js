const gallery = document.getElementById("gallery");
const loader = document.getElementById("loader");

let limit = 10;
let page = 1;
let loading = false;

async function fetchImages() {
  if (loading) return;

  loading = true;
  loader.style.display = "block";

  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`);
    const images = await res.json();

    renderImages(images);
    page++;
  } catch (error) {
    console.error("Error fetching images:", error);
  }

  loader.style.display = "none";
  loading = false;
}

function renderImages(images) {
  images.forEach((img) => {
    const div = document.createElement("div");
    div.className = "image-card";
    div.innerHTML = `
      <img src="${img.thumbnailUrl}" alt="${img.title}" />
      <p>${img.title}</p>
    `;
    gallery.appendChild(div);
  });
}

window.addEventListener("scroll", () => {
  const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (nearBottom && !loading) {
    fetchImages();
  }
});

fetchImages();
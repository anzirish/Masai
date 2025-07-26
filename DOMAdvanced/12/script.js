document.addEventListener("DOMContentLoaded", () => {
  const item = document.getElementById("item2");
  item.addEventListener("click", () => {
    alert(item.parentNode.textContent);
    console.log(item.previousElementSibling.textContent);
    console.log(item.nextElementSibling.textContent);
  });
});

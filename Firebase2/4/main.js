document.addEventListener("DOMContentLoaded", init);
const API_BASE_URL =
  "https://dfdsfgdgdf-a2a80-default-rtdb.asia-southeast1.firebasedatabase.app/books.json";
const bookContainer = document.getElementById("book-container");
const API_BASE_URL2 =
  "https://dfdsfgdgdf-a2a80-default-rtdb.asia-southeast1.firebasedatabase.app/members.json";
const memberContainer = document.getElementById("member-container");

let allBooks = [];
let filteredBooks = [];

function init() {
  fetchBooks();
  fetchMembers();
}

const bookTitle = document.getElementById("book-title-input");
const bookAuthor = document.getElementById("book-author-input");
const bookGenre = document.getElementById("book-genre-input");
const bookPublishedYear = document.getElementById("book-published-year-input");
const bookAvailability = document.getElementById("book-availability-input");
const addBookBtn = document.getElementById("add-item-btn");
const addMemberBtn = document.getElementById("add-member-btn");
const formGroup = document.querySelector(".form-group");
const formGroup2 = document.querySelector(".form-group2");
const memberName = document.getElementById("member-name-input");
const memberMembershipDate = document.getElementById("membership-date-input");
const memberActive = document.getElementById("member-active-input");

const filterBooksSelect = document.getElementById("filter-books");
const sortBooksSelect = document.getElementById("sort-books");

addBookBtn.addEventListener("click", (e) => validateBooks(e));
addMemberBtn.addEventListener("click", (e) => validateMember(e));

filterBooksSelect.addEventListener("change", filterBooks);
sortBooksSelect.addEventListener("change", sortBooks);

function validateMember(e) {
  e.preventDefault();
  console.log("validating member");
  const name = memberName.value;
  const membershipDate = memberMembershipDate.value;
  const availability = document.querySelector(
    'input[name="memberActive"]:checked'
  )?.value;
  const avatar =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghNre_egQ-rWq_l3X8LsTqZQAs94xn5hWRGp51aFUjU4aFN6keR2D8mPggW93-Jjc4Nc&usqp=CAU";

  if (!name || !membershipDate || !availability) {
    alert("Please xcheck inputs");
    console.log(name, memberMembershipDate, availability);
    return;
  }

  const active = availability === "true" ? true : false;

  const member = { name, membershipDate, active, avatar };
  console.log(member);
  formGroup2.reset();
  addMember(member);
}

function validateBooks(e) {
  e.preventDefault();

  const title = bookTitle.value;
  const author = bookAuthor.value;
  const genre = bookGenre.value;
  const publishedYear = bookPublishedYear.value;
  const available = document.querySelector(
    'input[name="checkAvailable"]:checked'
  )?.value;
  const image =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSghNre_egQ-rWq_l3X8LsTqZQAs94xn5hWRGp51aFUjU4aFN6keR2D8mPggW93-Jjc4Nc&usqp=CAU";

  if (!title || !author || !genre || !publishedYear || !available) {
    alert("Please xcheck inputs");
    return;
  }

  const availability = available === "true" ? true : false;

  const book = { title, author, genre, publishedYear, availability, image };
  console.log(book);
  formGroup.reset();
  addBook(book);
}

async function fetchBooks() {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      console.log(`HTTP error ${response.status}`);
      return;
    }

    const data = await response.json();
    const books = Object.entries(data).map(([id, item]) => ({ id, ...item }));
    allBooks = books;
    filteredBooks = [...books];
    displayBooks(books);
  } catch (error) {
    console.log(error);
  }
}

async function fetchMembers() {
  try {
    const response = await fetch(API_BASE_URL2);

    if (!response.ok) {
      console.log(`HTTP error ${response.status}`);
      return;
    }

    const data = await response.json();
    const members = Object.entries(data).map(([id, item]) => ({ id, ...item }));
    displayMembers(members);
  } catch (error) {
    console.log(error);
  }
}

function displayBooks(books) {
  bookContainer.innerHTML = "";
  books.forEach((book) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h2");
    const author = document.createElement("p");
    const genre = document.createElement("p");
    const div2 = document.createElement("div");
    const availability = document.createElement("p");
    const publishedYear = document.createElement("p");
    div.className = "border";
    img.src = book.image;
    img.alt = "Book Cover";
    title.textContent = book.title;
    author.textContent = book.author;
    genre.textContent = book.genre;
    availability.textContent = book.availability
      ? "Available"
      : "Not Available";
    publishedYear.textContent = book.publishedYear;
    div2.appendChild(availability);
    div2.appendChild(publishedYear);
    div.appendChild(img);
    div.appendChild(title);
    div.appendChild(author);
    div.appendChild(genre);
    div.appendChild(div2);
    bookContainer.appendChild(div);
  });
}

async function addBook(book) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    console.log(`HTTP error ${response.status}`);
    return;
  }
  fetchBooks();
}

async function addMember(member) {
  const response = await fetch(API_BASE_URL2, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(member),
  });
  if (!response.ok) {
    console.log(`HTTP error ${response.status}`);
    return;
  }
  fetchMembers();
}

function displayMembers(members) {
  memberContainer.innerHTML = "";
  members.forEach((member) => {
    const div = document.createElement("div");
    const img = document.createElement("img");
    const name = document.createElement("h2");
    const active = document.createElement("p");
    const membershipDate = document.createElement("p");
    div.className = "border";
    img.src = member.avatar;
    name.textContent = member.name;
    active.textContent = member.active ? "Active" : "Inactive";
    membershipDate.textContent = member.membershipDate;
    div.appendChild(img);
    div.appendChild(name);
    div.appendChild(active);
    div.appendChild(membershipDate);
    memberContainer.appendChild(div);
  });
}

function filterBooks() {
  const filterValue = filterBooksSelect.value;

  switch (filterValue) {
    case "All books":
      filteredBooks = [...allBooks];
      break;
    case "Genre":
      const selectedGenre = prompt("Enter genre");
      if (selectedGenre) {
        filteredBooks = allBooks.filter((book) =>
          book.genre.toLowerCase().includes(selectedGenre.toLowerCase())
        );
      } else {
        filteredBooks = [...allBooks];
      }
      break;
    case "Author":
      const selectedAuthor = prompt("Enter author name to filter");
      if (selectedAuthor) {
        filteredBooks = allBooks.filter((book) =>
          book.author.toLowerCase().includes(selectedAuthor.toLowerCase())
        );
      } else {
        filteredBooks = [...allBooks];
      }
      break;
    case "Availability":
      const availabilityChoice = prompt(
        "Filter by availability:\n1. Available\n2. Not Available\nEnter 1 or 2:"
      );
      if (availabilityChoice == "1") {
        filteredBooks = allBooks.filter((book) => book.availability == true);
      } else if (availabilityChoice == "2") {
        filteredBooks = allBooks.filter((book) => book.availability == false);
      } else {
        filteredBooks = [...allBooks];
      }
      break;
    default:
      filteredBooks = [...allBooks];
  }

  displayBooks(filteredBooks);
}

function sortBooks() {
  const sortValue = sortBooksSelect.value;

  switch (sortValue) {
    case "All books":
      filteredBooks = [...allBooks];
      break;
    case "Title":
      filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "Author":
      filteredBooks.sort((a, b) => a.author.localeCompare(b.author));
      break;
    case "Published Year":
      filteredBooks.sort(
        (a, b) => parseInt(a.publishedYear) - parseInt(b.publishedYear)
      );
      break;
    default:
      filteredBooks = [...allBooks];
  }

  displayBooks(filteredBooks);
}

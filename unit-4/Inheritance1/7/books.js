// Create book model to store books
function Book(title, author, year) {
  (this.title = title), (this.author = author), (this.year = year);
}

// Add summary which converts book properties into string
Book.prototype.getSummary = function () {
  return `${this.title} by ${this.author}, published in ${this.year}`;
};

// Generate list of book objects
const book1 = new Book("The Hobbit", "J.R.R. Tolkien", 1937);
const book2 = new Book("Mistborn", "Brandon Sanderson", 2006);
const book3 = new Book("The Name of the Wind", "Patrick Rothfuss", 2007);
const book4 = new Book("A Game of Thrones", "George R.R. Martin", 1996);
const book5 = new Book("The Way of Kings", "Brandon Sanderson", 2010);
const book6 = new Book("Eragon", "Christopher Paolini", 2002);
const book7 = new Book("The Eye of the World", "Robert Jordan", 1990);
const book8 = new Book("Sabriel", "Garth Nix", 1995);
const book9 = new Book("The Lies of Locke Lamora", "Scott Lynch", 2006);
const book10 = new Book("Throne of Glass", "Sarah J. Maas", 2012);
const book11 = new Book("The Final Empire", "Brandon Sanderson", 2006);
const book12 = new Book(
  "The Priory of the Orange Tree",
  "Samantha Shannon",
  2019
);
const book13 = new Book("Legendborn", "Tracy Deonn", 2020);
const book14 = new Book("City of Bones", "Cassandra Clare", 2007);
const book15 = new Book("Shadow and Bone", "Leigh Bardugo", 2012);
const book16 = new Book("An Ember in the Ashes", "Sabaa Tahir", 2015);
const book17 = new Book("Children of Blood and Bone", "Tomi Adeyemi", 2018);
const book18 = new Book("The Magicians", "Lev Grossman", 2009);
const book19 = new Book("Circe", "Madeline Miller", 2018);
const book20 = new Book("The Poppy War", "R.F. Kuang", 2018);
const book21 = new Book("The Black Prism", "Brent Weeks", 2010);
const book22 = new Book(
  "The Bear and the Nightingale",
  "Katherine Arden",
  2017
);
const book23 = new Book("Uprooted", "Naomi Novik", 2015);
const book24 = new Book("The Bone Season", "Samantha Shannon", 2013);
const book25 = new Book("The Inheritance Trilogy", "N.K. Jemisin", 2010);
const book26 = new Book("The Fifth Season", "N.K. Jemisin", 2015);
const book27 = new Book("The Dragonbone Chair", "Tad Williams", 1988);
const book28 = new Book("The Silmarillion", "J.R.R. Tolkien", 1977);
const book29 = new Book("The Chronicles of Narnia", "C.S. Lewis", 1950);
const book30 = new Book("His Dark Materials", "Philip Pullman", 1995);

// Step 4: Add all books to an array and export to make it usable in other modeules
export const Books = [
  book1,
  book2,
  book3,
  book4,
  book5,
  book6,
  book7,
  book8,
  book9,
  book10,
  book11,
  book12,
  book13,
  book14,
  book15,
  book16,
  book17,
  book18,
  book19,
  book20,
  book21,
  book22,
  book23,
  book24,
  book25,
  book26,
  book27,
  book28,
  book29,
  book30,
];

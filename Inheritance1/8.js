function Book(title, author, isAvailable = true) {
  (this.title = title),
    (this.author = author),
    (this.isAvailable = isAvailable);
}

function Member(name, borrowBooks = []) {
  (this.name = name), (this.borrowBooks = borrowBooks);
}

Member.prototype.borrow = function (book) {
  let borrowedBooks = [];

  if (book.isAvailable) {
    if (borrowedBooks < 3) {
      book.isAvailable = false;
      borrowedBooks.push(book.title);
      console.log(
        `Regular member : ${this.name} borrowed book : ${book.title}`
      );
    } else {
      console.log("Borrowing available upto max 3 books");
    }
  } else {
    console.log("The book is already borrowed");
  }
};

function PremiumMember(name) {
  Member.call(this, name);
  this.specialCollectionAccess = true;
}

PremiumMember.prototype = Object.create(Member.prototype);

PremiumMember.prototype.borrow = function (book) {
  let borrowedBooks = [];

  if (book.isAvailable) {
    if (borrowedBooks < 5) {
      book.isAvailable = !book.isAvailable;
      borrowedBooks.push(book.title);
      console.log(
        `Premium member : ${this.name} borrowed book : ${book.title}`
      );
    } else {
      console.log("Borrowing available upto max 3 books");
    }
  } else {
    console.log("The book is already borrowed");
  }
};

const book1 = new Book("The Hobbit", "Tolkien");
const book2 = new Book("Mistborn", "Sanderson");
const book3 = new Book("Harry Potter", "Rowling");
const book4 = new Book("The Name of the Wind", "Rothfuss");
const book5 = new Book("Game of Thrones", "Martin");
const book6 = new Book("Eragon", "Paolini");

const regular = new Member("Tanishq");
const premium = new PremiumMember("Neha");

regular.borrow(book1);
regular.borrow(book2);

premium.borrow(book4);
premium.borrow(book5);
premium.borrow(book2);

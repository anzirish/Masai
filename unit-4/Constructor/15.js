function Book(title, author) {
  return {
    title: title,
    author: author,
    details: function (books) {
      for (let book of books) {
        console.log(`Title : ${book.title}, Author : ${book.author}`);
      }
    },
  };
}

function createLibrary() {
  let books = [];

  return {
    addBook: function (book) {
      books.push(book);
    },

    removeBook: function (title) {
      for (let i = 0; i < books.length; i++) {
        if (books[i].title == title) {
          books.splice(i, 1);
          return;
        }
      }
      console.log(`Couldn't find book with title ${title}`);
    },

    listBooks: function () {
      let book = Book();
      book.details.call(this, books);
    },
  };
}

const library = createLibrary();

const book1 = Book("To Kill a Mockingbird", "Harper Lee");
const book2 = Book("1984", "George Orwell");

library.addBook(book1);
library.addBook(book2);

library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee
// Title: 1984, Author: George Orwell

library.removeBook("1984");
library.listBooks();
// Output:
// Title: To Kill a Mockingbird, Author: Harper Lee

const library = {
  books: [{ title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 }],

  addBook(book) {
    if (!book.title || !book.author || !book.year) {
      console.log("Book information is incomplete.");
      return;
    }
    this.books.push(book);
  },

  findBookByTitle(title) {
    return this.books.find((book) => book.title === title) || `There's no book with this titel : ${title}`
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);

    index !== -1 ? this.books.splice(index, 1) : console.log("Removing failed : Book not found.");
  },
};

library.removeBook("Hello di");

console.log(library.findBookByTitle("Hello di"));
console.log(library.books);

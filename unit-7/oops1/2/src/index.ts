class Book {
  title: string;
  author: string;
  price: number;

  constructor(title: string, author: string, price: number) {
    this.title = title;
    this.author = author;
    this.price = price;
  }
}

const book = new Book(
  "The lord of the rings : Rings of power",
  "JR Tolkien",
  450
);
console.log(book.author);
console.log(book.title);
console.log(book.price);

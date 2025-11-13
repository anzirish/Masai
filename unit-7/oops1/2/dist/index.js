"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    title;
    author;
    price;
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}
const book = new Book("The lord of the rings : Rings of power", "JR Tolkien", 450);
console.log(book.author);
console.log(book.title);
console.log(book.price);
//# sourceMappingURL=index.js.map
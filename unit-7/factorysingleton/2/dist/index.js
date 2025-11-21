"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PremiumBook {
    bookname;
    constructor(bookname) {
        this.bookname = bookname;
    }
    getCategory() {
        return "Premium Book";
    }
}
class RegularBook {
    bookName;
    constructor(bookName) {
        this.bookName = bookName;
    }
    getCategory() {
        return "Regular Book";
    }
}
class BookFactory {
    static createBook(bookName, price) {
        if (price > 1000)
            return new PremiumBook(bookName);
        return new RegularBook(bookName);
    }
}
const b1 = BookFactory.createBook("Design Patterns", 1500);
console.log(b1.getCategory()); // Premium Book
const b2 = BookFactory.createBook("JavaScript Guide", 500);
console.log(b2.getCategory()); // Regular Book
//# sourceMappingURL=index.js.map
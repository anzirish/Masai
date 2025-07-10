import { Books } from "./books.js"; // Make accesable book array of books module

// creating array pf book summaries
let summaries = Books.map((book) => {
  return book.getSummary();
});

// Print the summeries array
console.log(summaries);

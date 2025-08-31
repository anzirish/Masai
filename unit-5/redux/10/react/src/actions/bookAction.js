const ADD_BOOK = "ADD_BOOK";
const MARK_READ = "MARK_READ";
const UPDATE_BOOK = "UPDATE_BOOK";
const DELETE_BOOK = "DELETE_BOOK";

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

const markAsRead = (id) => ({ type: MARK_READ, payload: id });

const updateBook = (id, title, author, genre) => ({
  type: UPDATE_BOOK,
  payload: { id, title, author, genre },
});

const deleteBook = (id) => ({ type: DELETE_BOOK, payload: id });

export {
  ADD_BOOK,
  MARK_READ,
  UPDATE_BOOK,
  DELETE_BOOK,
  addBook,
  updateBook,
  markAsRead,
  deleteBook,
};

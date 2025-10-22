import {
  ADD_BOOK,
  DELETE_BOOK,
  MARK_READ,
  UPDATE_BOOK,
} from "../actions/bookAction";

const initialState = { books: [] };

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return { ...state, books: [...state.books, action.payload] };
    case MARK_READ:
      return {
        ...state,
        books: state.books.map((book) =>
          action.payload === book.id ? { ...book, read: !book.read } : book
        ),
      };
    case UPDATE_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          action.payload.id === book.id
            ? {
                ...book,
                title: action.payload.title,
                author: action.payload.author,
                genre: action.payload.genre,
              }
            : book
        ),
      };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };
    default:
      return state;
  }
};
export { bookReducer };

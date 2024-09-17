import BooksData from "../../data/Books";
import {
  ADD_BOOK_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  BookActionTypes,
  BookState,
  EDIT_BOOK,
  PUBLISH_BOOK,
  REMOVE_BOOK,
} from "./types";

const initialState: BookState = {
  books: BooksData,
  loading: false,
  error: "",
};

const bookReducer = (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case ADD_BOOK_REQUEST:
      return {
        ...state,
        loading: true,
        error: ''
      };
    case ADD_BOOK_SUCCESS:
      return {
        ...state,
        loading: false,
        books: [...state.books, action.payload],
      };
    case ADD_BOOK_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      };

    case PUBLISH_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload
            ? { ...book, published: !book.published }
            : book,
        ),
      };

    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) =>
          book.id === action.payload.id ? action.payload : book,
        ),
      };

    default:
      return state;
  }
};

export default bookReducer;

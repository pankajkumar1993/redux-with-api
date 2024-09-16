import { ADD_BOOK, BookActionTypes, BookState, EDIT_BOOK, PUBLISH_BOOK, REMOVE_BOOK } from "./types";

const initialState: BookState = {
  books: [{
    id: "1",
    name: "The React Hand box",
    des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis, doloribus consectetur odit rerum unde aliquam. Placeat animi quis deleniti provident sint perferendis nemo illum in sunt? Et, veritatis inventore.",
    author: "Maxmillian",
    isPublished: true,
    price: 100
  }],
  loading: false,
  error: ''
}



const bookReducer = (state = initialState, action: BookActionTypes) => {
  switch (action.type) {
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload]
      };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload)
      };

    case PUBLISH_BOOK:
      return {
        ...state,
        books: state.books.map((book) => (book.id === action.payload) ? { ...book, isPublished: !book.isPublished } : book)
      };

    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map((book) => (book.id === action.payload.id) ? action.payload : book)
      };

    default:
      return state;
  }
}


export default bookReducer
import {
  ADD_BOOK_FAILURE,
  ADD_BOOK_REQUEST,
  ADD_BOOK_SUCCESS,
  AddBookFailureAction,
  AddBookRequestAction,
  AddBookSuccessAction,
  Book,
  BookActionTypes,
  EDIT_BOOK,
  PUBLISH_BOOK,
  REMOVE_BOOK,
} from "./types";

// ************************* Define Action Creator *************************

export const addBookRequest = (): AddBookRequestAction => ({
  type: ADD_BOOK_REQUEST,
});

export const addBookSuccess = (book: Book): AddBookSuccessAction => ({
  type: ADD_BOOK_SUCCESS,
  payload: book,
});

export const addBookFailure = (error: string): AddBookFailureAction => ({
  type: ADD_BOOK_FAILURE,
  payload: error,
});



export const removeBook = (id: string): BookActionTypes => ({
  type: REMOVE_BOOK,
  payload: id,
});

export const editBook = (id: string, updatedBook: Book): BookActionTypes => ({
  type: EDIT_BOOK,
  payload: { id, updatedBook },
});

export const publishBook = (id: string): BookActionTypes => ({
  type: PUBLISH_BOOK,
  payload: id,
});

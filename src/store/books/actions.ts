import { ADD_BOOK, Book, BookActionTypes, EDIT_BOOK, PUBLISH_BOOK, REMOVE_BOOK } from "./types";


// ************************* Define Action Creator *************************

export const addBook = (book: Book): BookActionTypes => ({
  type: ADD_BOOK,
  payload: book
})


export const removeBook = (id: string): BookActionTypes => ({
  type: REMOVE_BOOK,
  payload: id
})

export const editBook = (id: string, updatedBook: Book): BookActionTypes => ({
  type: EDIT_BOOK,
  payload: { id, updatedBook }
});

export const publishBook = (id: string): BookActionTypes => ({
  type: PUBLISH_BOOK,
  payload: id
})
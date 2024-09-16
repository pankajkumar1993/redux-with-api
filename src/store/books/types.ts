
// ************************* Books Types *************************
export interface Book {
  id: string,
  name: string,
  des: string,
  author: string,
  price: number,
  isPublished: boolean
}

export interface BookState {
  books: Book[],
  loading: boolean,
  error: string,
}

// ************************* Define Actions *************************
export const ADD_BOOK = "ADD_BOOK";
export const EDIT_BOOK = "EDIT_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const PUBLISH_BOOK = "PUBLISH_BOOK";


// ************************* Action Types *************************

export interface AddBookAction {
  type: typeof ADD_BOOK,
  payload: Book
}


export interface RemoveBookAction {
  type: typeof REMOVE_BOOK,
  payload: string
}


export interface EditBookAction {
  type: typeof EDIT_BOOK,
  payload: {
    id: string,
    updatedBook: Partial<Book>
  }
}

export interface PublishBookAction {
  type: typeof PUBLISH_BOOK,
  payload: string
}


export type BookActionTypes =
  AddBookAction |
  RemoveBookAction |
  EditBookAction |
  PublishBookAction
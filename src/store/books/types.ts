// ************************* Books Types *************************
export interface Book {
  id: string;
  name: string;
  price: number;
  desc: string;
  published: boolean;
  author: string;
}

export interface BookState {
  books: Book[];
  loading: boolean;
  error: string;
}

// ************************* Define Actions *************************
// export const ADD_BOOK = "ADD_BOOK";

export const ADD_BOOK_REQUEST = "ADD_BOOK_REQUEST";
export const ADD_BOOK_SUCCESS = "ADD_BOOK_SUCCESS";
export const ADD_BOOK_FAILURE = "ADD_BOOK_FAILURE";

// export const START_EDIT_BOOK = "START_EDIT_BOOK";
// export const SUCCESS_EDIT_BOOK = "SUCCESS_EDIT_BOOK";
// export const FAILED_EDIT_BOOK = "FAILED_EDIT_BOOK";

// export const START_REMOVE_BOOK = "START_REMOVE_BOOK";
// export const SUCCESS_REMOVE_BOOK = "SUCCESS_REMOVE_BOOK";
// export const FAILED_REMOVE_BOOK = "FAILED_REMOVE_BOOK";

// export const START_PUBLISH_BOOK = "START_PUBLISH_BOOK";
// export const SUCCESS_PUBLISH_BOOK = "SUCCESS_PUBLISH_BOOK";
// export const FAILED_PUBLISH_BOOK = "FAILED_PUBLISH_BOOK";

export const EDIT_BOOK = "EDIT_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const PUBLISH_BOOK = "PUBLISH_BOOK";

// ************************* Action Types *************************
export interface AddBookRequestAction {
  type: typeof ADD_BOOK_REQUEST;
}

export interface AddBookSuccessAction {
  type: typeof ADD_BOOK_SUCCESS;
  payload: Book;
}

export interface AddBookFailureAction {
  type: typeof ADD_BOOK_FAILURE;
  payload: string;
}

export interface RemoveBookAction {
  type: typeof REMOVE_BOOK;
  payload: string;
}

export interface EditBookAction {
  type: typeof EDIT_BOOK;
  payload: {
    id: string;
    updatedBook: Partial<Book>;
  };
}

export interface PublishBookAction {
  type: typeof PUBLISH_BOOK;
  payload: string;
}

export type BookActionTypes =
  | AddBookRequestAction | AddBookSuccessAction | AddBookFailureAction
  | RemoveBookAction
  | EditBookAction
  | PublishBookAction;

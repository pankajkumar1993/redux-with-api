import { combineReducers } from "redux";
import bookReducer from "./books/reducer";

const rootReducers = combineReducers({
  books: bookReducer,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;

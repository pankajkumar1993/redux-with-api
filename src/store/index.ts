import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import { thunk, ThunkMiddleware } from "redux-thunk";
import rootReducers, { RootState } from "./rootReducers";
import { useDispatch } from "react-redux";

// Setup for Redux DevTools
const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Configure middleware
const middleware = [thunk as unknown as ThunkMiddleware<RootState>];

// Create the store with root reducer and middleware
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

// Export Store
export default store;

// Custom hook for dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

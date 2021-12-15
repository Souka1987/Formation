/*
 * React
 * ***** */
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import { ArticleReducer } from "./reducers/ArticleReducers";
import { CountriesReducer } from "./reducers/CountriesReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
  article: ArticleReducer,
  countries: CountriesReducer,
});

/*
 * Store export
 * ************ */
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
); // Dev
// export const store = createStore(rootReducer); // Prod

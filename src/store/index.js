/* REDUCERS fonctions qui prennent une  state  et une   action  en arguments et 
 retournent le  state, ils déterminent 
la construction progressive de l'appli. */


/*
 * React
 * ***** */
import {
    createStore,
    combineReducers,
    applyMiddleware
} from "redux";
import {
    composeWithDevTools
} from "redux-devtools-extension";
import thunk from "redux-thunk";

/*
 * Reducers
 * ******** */
import {
    ImagesReducer
} from "./reducers/ImagesReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
    images: ImagesReducer,
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
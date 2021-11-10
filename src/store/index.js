/* Le reducers permet de gérer la mise à jour des données. 
Le reducers et les actions sont complémentaires.*/

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
import {
    UserReducer
} from "./reducers/UserReducers";

/*
 * All (Root) Reducers
 * ******************* */
const rootReducer = combineReducers({
    images: ImagesReducer,
    user: UserReducer
});

/*
 * Store export
 * ************ */
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk))); // Dev
// export const store = createStore(rootReducer); // Prod
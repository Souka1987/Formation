/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector = State
 * ******** */
const initialState = {
  data: []
};

/*
 * Reducers 
 * ******** */
// Exporter la fonction ImagesReducer
export function ImagesReducer(state = initialState, action) {
  switch (action.type) {
    //   GET_IMAGES_DATA issu de fichier ActionsTypes
    case Actions.GET_IMAGES_DATA:
      return { data: action.payload };
    default:
      return state;
  }
}

/*
 * Getters
 * ******* */

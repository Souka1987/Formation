/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  data: []
};

/*
 * Reducers
 * ******** */
export function ImagesReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_IMAGES_DATA:
      return { data: action.payload };
    default:
      return state;
  }
}

/*
 * Getters
 * ******* */

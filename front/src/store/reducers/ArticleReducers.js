/*
 * Import Actions { ... }
 * ********************** */
import * as Actions from "../actions/ActionTypes";

/*
 * Selector
 * ******** */
const initialState = {
  flash: "",
  newsData: [],
  
};

/*
 * Reducers
 * ******** */
export function ArticleReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NEWS_DATA:
      return {
        ...state,
        flash: action.payload.message,
        newsData: action.payload,
      };
    case Actions.ADD_NEWS_DATA:
      return {
        ...state,
        flash: action.payload.message,
        newsData: action.payload,
      };
    case Actions.EDIT_NEWS_DATA:
      return {
        ...state,
        flash: action.payload.message,
        newsData: action.payload,
      };
    case Actions.DELETE_NEWS_DATA:
      return {
        ...state,
        flash: action.payload.message,
        newsData: action.payload,
      };
    default:
      return state;
  }
}

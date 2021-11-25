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
  news: {
    title: "",
    author: "",
    content: "",
    date: "",
  },
};

/*
 * Reducers
 * ******** */
export function ArticleReducer(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_NEWS_DATA:
      return { ...state, newsData: action.payload };
    case Actions.ADD_NEWS_DATA:
      return { ...state, flash: action.payload };
      case Actions.EDIT_NEWS_DATA:
        return state.map((news) => {
          // Post par son ID
          if (news.id === action.payload.id) {
            // Retourner tous sauf le content
            return {
              ...news,
              content: action.payload.content,
            };
            // Retourner tous les éléments si il ne rentrent pas dans les conditions
          } else return news;
        });
        case Actions.DELETE_NEWS_DATA:
      // Tous ceux dont l'id n'est pas egal à l'action.payload.NewsId
      return state.filter((article) => article.id !== action.payload.NewsId);
    default:
      return state;
  }
}

/*
 * Getters
 * ******* */

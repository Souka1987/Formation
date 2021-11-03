import { ADD_POSTS, GET_POSTS } from "../actions/post.action";

const initialState = {};

export default function postRducer(state = initialState, action) {
  // Type d'action reçu
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POSTS:
      //   Récupère toutes les données du state avec le nouveau post
      return [action.payload, ...state];
    default:
      return state;
  }
}

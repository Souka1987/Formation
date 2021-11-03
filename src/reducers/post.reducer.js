import {
  ADD_LIKE,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  GET_POSTS,
} from "../actions/post.action";

const initialState = {};

export default function postRducer(state = initialState, action) {
  // Type d'action reçu
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POST:
      //   Récupère toutes les données du state avec le nouveau post
      return [action.payload, ...state];
    // Pour l'édition mapper chaque post individuellement
    case EDIT_POST:
      return state.map((post) => {
        // Post par son ID
        if (post.id === action.payload.id) {
          // Retourner tous sauf le content
          return {
            ...post,
            content: action.payload.content,
          };
          // Retourner tous les éléments si il ne rentrent pas dans les conditions
        } else return post;
      });
    case DELETE_POST:
      // Tous ceux dont l'id n'est pas egal à l'action.payload.postId
      return state.filter((post) => post.id !== action.payload.postId);
    case ADD_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likes: action.payload.likes,
          };
        } else return post;
      });
    default:
      return state;
  }
}

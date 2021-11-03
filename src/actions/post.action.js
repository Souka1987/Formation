import axios from "axios";

// Communique avec la base de données
export const GET_POSTS = "GET_POSTS";
export const ADD_POSTS = "ADD_POSTS";


// POST
export const getPosts = () => {
  return (dispatch) => {
    //  Pour avoir les articles dans l'ordre decroissant
    return (
      axios
        //   Ramener de la data
        .get("http://localhost:3000/posts?_sort=id&_order=desc")
        .then((res) => {
          // Payload = envoie de données
          dispatch({ type: GET_POSTS, payload: res.data });
        })
        //   Montrer si il y a une erreur
        .catch((err) => console.log(err))
    );
  };
};


// ADD
export const addPost = (data) => {
  return (dispatch) => {
    //  Pour avoir les articles dans l'ordre decroissant
    return (
      axios
        //   Ramener de la data
        .post("http://localhost:3000/posts", data)
        .then((res) => {
          // Payload = envoie de données
          dispatch({ type: ADD_POSTS, payload: data });
        })
        //   Montrer si il y a une erreur
        .catch((err) => console.log(err))
    );
  };
};

import axios from "axios";

// Communique avec la base de données
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_LIKE = "ADD_LIKE";

// POST
export const getPosts = () => {
  return (dispatch) => {
    //  Pour avoir les articles dans l'ordre decroissant
    return (
      axios
        //   Ramener de la data
        .get("http://localhost:3002/posts?_sort=id&_order=desc")
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
        .post("http://localhost:3002/posts", data)
        .then((res) => {
          // Payload = envoie de données
          dispatch({ type: ADD_POST, payload: data });
        })
        //   Montrer si il y a une erreur
        .catch((err) => console.log(err))
    );
  };
};

// EDIT
export const editPost = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3002/posts/${data.id}`,
      data: { ...data },
    })
      .then(() => {
        /* Envoyer la data et casser le tableau pour avoir 
        chaque éléments du tableau séparement { ..data } */
        dispatch({ type: EDIT_POST, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

// DELETE
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:3002/posts/${postId}`,
    })
      .then((res) => {
        // On aura besion de l'id du post pour le supprimer
        dispatch({ type: DELETE_POST, payload: { postId } });
      })
      .catch((err) => console.log(err));
  };
};

// LIKES
export const addLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3002/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        /* Envoyer la data et casser le tableau pour avoir 
        chaque éléments du tableau séparement { ..data } */
        dispatch({ type: ADD_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

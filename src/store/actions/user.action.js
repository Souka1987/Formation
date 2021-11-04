import axios from "axios";

// Communique avec la base de données
export const GET_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";

export const getUser = () => {
  return (dispatch) => {
    //  Pour avoir les articles dans l'ordre decroissant
    return (
      axios
        //   Ramener de la data
        .get("http://localhost:3002/users")
        .then((res) => {
          // Payload = envoie de données
          dispatch({ type: GET_USER, payload: res.data });
        })
        //   Montrer si il y a une erreur
        .catch((err) => console.log(err))
    );
  };
};

// LIKE
export const addUserLike = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:3002/posts/${data.id}`,
      data: { ...data },
    })
      .then((res) => {
        /* Envoyer la data et casser le tableau pour avoir 
        chaque éléments du tableau séparement { ..data } */
        dispatch({ type: ADD_USER_LIKE, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

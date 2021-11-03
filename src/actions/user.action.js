import axios from "axios";

// Communique avec la base de données
export const GET_USER = "GET_USER";

export const getUser = () => {
  return (dispatch) => {
    //  Pour avoir les articles dans l'ordre decroissant
    return (
      axios
        //   Ramener de la data
        .get("http://localhost:3000/users")
        .then((res) => {
          // Payload = envoie de données
          dispatch({ type: GET_USER, payload: res.data });
        })
        //   Montrer si il y a une erreur
        .catch((err) => console.log(err))
    );
  };
};
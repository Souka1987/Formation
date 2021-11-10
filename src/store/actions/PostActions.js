/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types actions { ... }
 * ******************** */
import {GET_POSTS, ADD_POST } from "./ActionTypes";

// Post
export const getPosts = () => {
    return (dispatch) => {
      //  Pour avoir les articles dans l'ordre decroissant
      return (
        axios
          //   Ramener de la data
          .get("http://localhost:3003/images?_sort=id&_order=desc")
          .then((res) => {
            // Payload = envoie de données
            dispatch({ type: GET_POSTS, payload: res.data });
          })
          //   Montrer si il y a une erreur
          .catch((err) => console.log(err))
      );
    };
  };
  
  // Add
  export const addPost = (data) => {
    return (dispatch) => {
      return (
        axios
          //   Ramener de la data
          .post("http://localhost:3003/images", data)
          .then((res) => {
            // Payload = envoie de données
            dispatch({ type: ADD_POST, payload: data });
          })
          //   Montrer si il y a une erreur
          .catch((err) => console.log(err))
      );
    };
  };


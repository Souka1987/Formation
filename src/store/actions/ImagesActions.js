/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types actions { ... }
 * ******************** */
import { GET_IMAGES_DATA, ADD_IMAGES_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get Images
export const getImages = () => {
  return (dispatch) => {
    return axios
    //   Demander à axios d'aller chercher dans DB
    .get("http://localhost:3003/images")
    // Et nous renvoyer les datas
    .then((res) => {
        console.log('res data', res.data)
        dispatch({ type: GET_IMAGES_DATA, payload: res.data})
    })
      .catch((err) => console.log(err));
  };
};

// Add Images
export const addImages = (data) => {
  console.log('addImages', data)
  return (dispatch) => {
    return axios
    // Ordre décroissant
      .post("http://localhost:3003/images?_sort=id&_order=desc", data)
      .then((res) => {
        console.log("postImages", res.data);
        dispatch({ type: ADD_IMAGES_DATA, payload: res.data.message });
      })
      .catch((err) => console.log(err));
  };
};
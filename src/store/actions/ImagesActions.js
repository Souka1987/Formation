/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import { GET_IMAGES_DATA } from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get News
export const getImages = () => {
  return (dispatch) => {
    return axios
    //   Demander à axios d'aller chercher dans DB
    .get("http://localhost:3003/images")
    // Et nous donner les datas
    .then((res) => {
        console.log('res data', res.data)
        dispatch({ type: GET_IMAGES_DATA, payload: res.data})
    })
      .catch((err) => console.log(err));
  };
};

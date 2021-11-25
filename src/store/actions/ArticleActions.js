/*
 * Import - Module
 * *************** */
import axios from "axios";

/*
 * Import types { ... }
 * ******************** */
import {
  GET_NEWS_DATA,
  ADD_NEWS_DATA,
  EDIT_NEWS_DATA,
  DELETE_NEWS_DATA,
} from "./ActionTypes";

/*
 * Actions
 * ******* */

// Get News [Method GET router.js]
export const getNews = () => {
  console.log("getNews");
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log("getNews:", res.data);
        dispatch({
          type: GET_NEWS_DATA,
          payload: res.data.dbNews
        });
      })
      .catch((err) => console.log(err));
  };
};

// Add News [Method POST router.js]
export const addNews = (data) => {
  console.log("addNews", data);
  return (dispatch) => {
    return axios
      .post("http://localhost:5000/news", data)
      .then((res) => {
        console.log("postNews", res.data);
        dispatch({
          type: ADD_NEWS_DATA,
          payload: res.data.message
        });
      })
      .catch((err) => console.log(err));
  };
};

// Edit News [Method PUT router.js]
export const editNews = (data) => {
  return (dispatch) => {
    return axios({
      method: "put",
      url: `http://localhost:5000/news/${data.id}`,
      data: { ...data },
    })
      .then(() => {
        /* Envoyer la data et casser le tableau pour avoir 
        chaque éléments du tableau séparement { ..data } */
        dispatch({ type: EDIT_NEWS_DATA, payload: { ...data } });
      })
      .catch((err) => console.log(err));
  };
};

// Delete One News [Method DELETE router.js]
export const deleteNews = (article) => {
  return (dispatch) => {
    return axios({
      method: "delete",
      url: `http://localhost:5000/news/${article.id}`,
    })
      .then((res) => {
        // On aura besion de l'id du post pour le supprimer
        dispatch({ type: DELETE_NEWS_DATA, payload: { article } });
      })
      .catch((err) => console.log(err));
  };
};

// Delete All News [Method DELETE router.js]
export const deleteAllNews = (data) => {
  console.log("deleteAllNews", data);
  return (dispatch) => {
    return axios
      .delete("http://localhost:5000/", data)
      .then((res) => {
        console.log("deleteAllNews", res.data);
        dispatch({
          type: DELETE_NEWS_DATA
        });
      })
      .catch((err) => console.log(err));
  };
};
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

export const getNews = () => {
  console.log("getNews");
  return (dispatch) => {
    return axios
      .get("http://localhost:5000/")
      .then((res) => {
        console.log("getNews:", res.data);
        dispatch({
          type: GET_NEWS_DATA,
          payload: res.data.dbNews,
        });
      })
      .catch((err) => console.log(err));
  };
};

// create [Method POST router.js]
export const create = (data) => {
  console.log("create");
  return (dispatch) => {
    return axios
      .post("http://localhost:5000/", data)
      .then((res) => {
        console.log("create", res.data);
        dispatch({
          type: ADD_NEWS_DATA,
          payload: res.data.dbNews,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Edit News [Method PUT router.js]
export const editNews = (id, data) => {
  console.log("editNews", id);
  return (dispatch) => {
    return axios
      .put(`http://localhost:5000/${id}`, data)
      .then((res) => {
        console.log("editNews", res.data);
        dispatch({
          type: EDIT_NEWS_DATA,
          payload: res.data.dbNews,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Delete One News [Method DELETE router.js]
export const deleteOne = (id) => {
  console.log("deleteOne", id);
  return (dispatch) => {
    return axios
      .delete("http://localhost:5000/" + id)
      .then((res) => {
        console.log("deleteOne", res.data);
        dispatch({
          type: DELETE_NEWS_DATA,
          payload: res.data.dbNews,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Delete All News [Method DELETE router.js]
export const deleteMany = () => {
  console.log("deleteMany");
  return (dispatch) => {
    return axios
      .delete("http://localhost:5000/")
      .then((res) => {
        console.log("deleteMany", res.data);
        dispatch({
          type: DELETE_NEWS_DATA,
          payload: res.data.dbNews,
        });
      })
      .catch((err) => console.log(err));
  };
};

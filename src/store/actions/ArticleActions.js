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

// Add News [Method POST router.js]
export const addNews = (data) => {
  console.log("addNews", data);
  return (dispatch) => {
    return axios
      .post("http://localhost:5000/", data)
      .then((res) => {
        console.log("addNews", res.data);
        dispatch({
          type: ADD_NEWS_DATA,
          payload: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Edit News [Method PUT router.js]
export const editNews = (data) => {
  console.log("editNews", data);
  return (dispatch) => {
    return axios
      .put(`http://localhost:5000/news/${data}`)
      .then((res) => {
        console.log("editNews", res.data);
        dispatch({
          type: EDIT_NEWS_DATA,
          payload: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  };
};

// Delete One News [Method DELETE router.js]
export const deleteOneNews = (data) => {
  console.log("deleteOneNews", data);
  return (dispatch) => {
    return axios
      .delete(`http://localhost:5000/news/${data.id}`)
      .then((res) => {
        console.log("deleteOneNews", res.data);
        dispatch({
          type: DELETE_NEWS_DATA,
          payload: res.data.message,
        });
      })
      .catch((err) => console.log(err));
  };
};

// // Delete All News [Method DELETE router.js]
// export const deleteAllNews = () => {
//   console.log("deleteAllNews");
//   return (dispatch) => {
//     return axios
//       .delete("http://localhost:5000/")
//       .then((res) => {
//         console.log("deleteNews", res.data);
//         dispatch({
//           type: DELETE_NEWS_DATA,
//           payload: res.data.message,
//         });
//       })
//       .catch((err) => console.log(err));
//   };
// };

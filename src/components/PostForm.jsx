import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addImages, getImages } from "../store/actions/ImagesActions";

const PostForm = () => {
  // Titre
  const [title, setTitle] = useState("");
  // Image
  const [image, setImage] = useState("");
  // Content
  const [content, setContent] = useState("");
  // User
  //   const user = useSelector((state) => state.UserReducer);
  // Dispatcher
  const dispatch = useDispatch();

  console.log(content);
  //   console.log(user);
  //   console.log(getImages);

  const handleForm = async (e) => {
    e.preventDefault();
    if (content) {
      const data = {
        title,
        image,
        content,
        // author: user[0].pseudo,
      };

      // Déclencher l'action et passer en paramètre les datas
      await dispatch(addImages(data));
      //   setTitle("");
      setContent("");
      // Obtenir les posts
      dispatch(getImages());
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        {/* 
      <img
          onClick={() => setImage()}
        //   src="./icons/edit.svg"
          alt="edit"
        />{" "} */}

        <input
          type="text"
          placeholder="Titre du poste"
          //   value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Postez vos pensées..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <input type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default PostForm;

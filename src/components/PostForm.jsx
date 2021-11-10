import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost, getPosts } from "../store/actions/PostActions";

// MUI
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";


const PostForm = () => {
  // Titre
  const [title, setTitle] = useState("");
  // Image
  const [image, setImage] = useState("");
  // Content
  const [content, setContent] = useState("");
  // User
  // const user = useSelector((state) => state.UserReducer);
  // Dispatcher
  const dispatch = useDispatch();

  // console.log(content);
  // console.log(user);
  // console.log(addPost);

  const handleForm = async (e) => {
    e.preventDefault();
    if (title && content) {
      const data = {
        title,
        image,
        content,
        // author: user[0].pseudo,
      };

      // Déclencher l'action et passer en paramètre les datas
      await dispatch(addPost(data));
      setTitle("");
      setImage("");
      setContent("");

      // Obtenir les posts
      dispatch(getPosts());
    }
  };

  // MUI
  const Input = styled("input")({
    display: "none",
  });

  return (
    <div className="form-container">
      <form onSubmit={(e) => handleForm(e)}>
        {/* Image */}
        {/* <img onClick={() => setImage()} value={image} src="" alt="" /> */}
        {/*  */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
            />
            <Button variant="contained" component="span">
              télécharger un fichier
            </Button>
          </label>
          <label htmlFor="icon-button-file">
            <Input accept="image/*" id="icon-button-file" type="file" />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            ></IconButton>
          </label>
        </Stack>
        <input
          type="text"
          placeholder="Titre du poste"
          value={title}
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

import React from "react";
import { useSelector } from "react-redux";
import PostForm from "./components/PostForm";
import User from "./components/User";
import Post from "./components/Post";
import { isEmpty } from "./components/Utils";

const App = () => {
  // Hook => useSelector
  const posts = useSelector((state) => state.postReducer);
  console.log(posts);

  return (
    <div>
      <h1>Extreme</h1>
      <PostForm />
      <div className="content">
        <div className="post-container">
          {/* .map pour les données */}
          {/* Le '!' signifie "n'est pas" */}
          {!isEmpty(posts) &&
            posts.map((post, index) => <Post post={post} key={index} />)}
        </div>
        <User />
      </div>
    </div>
  );
};

export default App;

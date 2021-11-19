import Post from "../post/Post";
import "./posts.css";
import React from "react";

const Posts = () => {
    return (
        <div className="posts">
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
};

export default Posts;
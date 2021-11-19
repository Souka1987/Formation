import "./singlePost.css";
import React from "react";

const SinglePost = () => {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://wallpaperaccess.com/full/3563968.jpg" alt=""
                 className="singlePostImg" />
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet consectetur 
            <div className="singlePostEdit">
            <i className="SinglePostIcon far fa-edit"></i>
            <i className="singlePostIcon fas fa-trash"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Souka</b></span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDescr">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laborum sapiente eaque. Maxime similique aperiam quas sunt quisquam. Hic necessitatibus perferendis quis saepe maxime in aut reiciendis sequi beatae consequatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laborum sapiente eaque. Maxime similique aperiam quas sunt quisquam. Hic necessitatibus perferendis quis saepe maxime in aut reiciendis sequi beatae consequatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laborum sapiente eaque. Maxime similique aperiam quas sunt quisquam. Hic necessitatibus perferendis quis saepe maxime in aut reiciendis sequi beatae consequatur.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis laborum sapiente eaque. Maxime similique aperiam quas sunt quisquam. Hic necessitatibus perferendis quis saepe maxime in aut reiciendis sequi beatae consequatur.</p>
        </div>

    );
};

export default SinglePost;
import "./post.css";
import React from "react";

const Post = () => {
    return (
        <div className="post">
            <img 
            className="postImg"
            src="https://data.topquizz.com/distant/quizz/big/4/2/2/6/226224_29fe7110cc.jpg" alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
               Lorem ipsum dolor sit amet 
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit facere reprehenderit asperiores ad quae, rerum dolore at ullam sint iusto assumenda aperiam accusamus beatae illo commodi eveniet minima nemo fugiat?</p>
        </div>
    );
};

export default Post;
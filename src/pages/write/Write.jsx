import "./write.css";
import React from "react";

const Write = () => {
    return (
        <div className="write">
            <img className="writeImg" src="https://pbs.twimg.com/media/EucwFwQXYAgn9ME.jpg" alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                    </label>
                    {/* le display 'none' sert à supprimer le 'choisir un fichier' */}
                    <input type="file"  id="fileInput" style={{ display: "none"}} />
                    <input type="text" placeholder="title" className="writeInput" 
                    autoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story ..." 
                    type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    );
};

export default Write;
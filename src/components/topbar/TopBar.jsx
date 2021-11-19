import { Link } from "react-router-dom";
import "./topbar.css";
import React from "react";

const TopBar = () => {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-pinterest-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                    {/* Le lien "logout" n'est visible seulement pour l'user connecté */}
                    {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img className="topImg"
                src="https://www.netcost-security.fr/wp-content/uploads/2021/03/1616404326_Shingeki-No-Kyojin-Dernier-chapitre-du-manga-date-heure.jpg" alt="" />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                        <Link className="link" to="/register">REGISTER</Link>
                        </li>
                        </ul>
                    )
                }
                
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    );
};

export default TopBar;
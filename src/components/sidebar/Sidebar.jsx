import "./sidebar.css";
import React from "react";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="http://pm1.narvii.com/6563/7a45c28b6c62fccc447e5ad6f8ff41afcbc5f38a_00.jpg" alt="" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, sint exercitationem aspernatur impedit dicta, eos autem molestias voluptatum quam ipsam rem nesciunt. Quas quisquam laboriosam delectus. Saepe nobis optio consequuntur.</p>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fab fa-facebook-square"></i>
                <i className="sidebarIcon fab fa-twitter-square"></i>
                <i className="sidebarIcon fab fa-pinterest-square"></i>
                <i className="sidebarIcon fab fa-instagram-square"></i>
            </div>
            </div>
        </div>
    );
};

export default Sidebar;
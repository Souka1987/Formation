import "./header.css";
import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" 
            src="https://cutewallpaper.org/21/aot-wallpapers/66-Snk-Wallpapers-on-WallpaperPlay.jpg" alt="" />
        </div>
    );
};

export default Header;
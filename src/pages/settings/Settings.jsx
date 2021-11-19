import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
import React from "react";

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile picture</label>
                    <div className="settingsPP">
                        <img src="https://45secondes.fr/wp-content/uploads/2021/02/1614455049_965_Shingeki-no-Kyojin-quand-et-a-quelle-heure-voir-lepisode.jpg" alt="" />
                        <label htmlFor="fileInput">
                        <i class="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Souka" />
                    <label>Email</label>
                    <input type="email" placeholder="soukainataa1987@gmail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    );
};

export default Settings;
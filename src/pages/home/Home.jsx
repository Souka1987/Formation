import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";
import React from "react";

const Home = () => {
    return (
        <>
        <Header />
        <div className="home">
            <Posts />
            <Sidebar />
        </div>
        </>
    );
};

export default Home;
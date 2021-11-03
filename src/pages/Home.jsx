import React from "react";
import Navigation from "../components/Navigation";
import Articles from "./Articles";

const Home = () => {
  return (
    <>
      <div className="home">
        <Navigation />
        <Articles />
      </div>
    </>
  );
};

export default Home;

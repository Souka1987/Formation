import React from "react";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Navigation from "../components/Navigation";

const Articles = () => {
  const data = useSelector(state => state.images.data)
  return (
    <div>
      <Navigation />
      <h1>Articles</h1>
      {data.map(img => {
        return  (
          <Cards img={img} key={img.id}/>
      )})}
      
    </div>
  );
};

export default Articles;

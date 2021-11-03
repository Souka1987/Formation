import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Cards";

const University = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://universities.hipolabs.com/search?name=middle")
      .then((res) => setData(res.data));

  }, []);

  return (
    <div className="universities">
      <ul className="name">
        {data.map((university) => (
          <Card university={university} key={university.name} />
        ))}
      </ul>
    </div>
  );
};

export default University;

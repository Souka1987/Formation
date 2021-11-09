import React from "react";
// Dans le router-dom Navlink a été remplacé par Link
import { Link } from "react-router-dom";

// MUI
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeIcon from "@mui/icons-material/Home";
import ArticleIcon from "@mui/icons-material/Article";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import CloudIcon from '@mui/icons-material/Cloud';

// ICONS
// import Icon from "@mui/material/Icon";

const Navigation = () => {
  // const [value, setValue] = React.useState(0);
  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <div className="nav">
      <Tabs>
        <Link to="/">
          <Tab icon={<HomeIcon />} label="ACCEUIL" />
        </Link>

        <Link to="/a-propos">
          <Tab icon={<PersonPinIcon />} label="A PROPOS" />
        </Link>

        <Link to="/articles">
          <Tab icon={<ArticleIcon />} label="ARTICLE" />
        </Link>

        <Link to="/meteo">
          <Tab icon={<CloudIcon />} label="WEATHER" />
        </Link>
      </Tabs>
    </div>
  );
};

export default Navigation;

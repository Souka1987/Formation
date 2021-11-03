import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" className="nav-active">
        Accueil
      </NavLink>

      <NavLink exact to="/news" className="nav-active">
        News
      </NavLink>

      <NavLink exact to="/about" className="nav-active">
        A propos
      </NavLink>

      <NavLink exact to="/contact" className="nav-active">
        Contact
      </NavLink>
    </div>
  );
};

export default Navigation;

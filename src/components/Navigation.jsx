import React from "react";
// Dans le router-dom Navlink a été remplacé par Link
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/" className="link">
        Acceuil
      </Link>
      <Link to="/a-propos" className="link">
        A propos
      </Link>
      <Link to="/articles" className="link">
        Articles
      </Link>
    </div>
  );
};

export default Navigation;

import React from "react";
import { useSelector } from "react-redux";
import { isEmpty } from "../utils/Util";
const User = () => {
  const user = useSelector((state) => state.UserReducers);

  return (
    <div className="user-container">
      <div className="user">
        {/* Si ce n'est pas vide alors tu monte l'user */}
        <h3>{!isEmpty(user[0]) && user[0].pseudo}</h3>
      </div>
    </div>
  );
};

export default User;

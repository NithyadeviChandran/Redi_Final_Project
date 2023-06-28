import React from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default Logout;

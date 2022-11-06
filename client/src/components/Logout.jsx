import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    navigate("/");
  }, []);
  return (
    <div>
      <p>Logged out Successfully</p>
    </div>
  );
};

export default Logout;

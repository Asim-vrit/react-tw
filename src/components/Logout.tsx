import React from "react";
import { useNavigate } from "react-router";

function Logout() {
  const navigate = useNavigate();

  function logoutClick() {
    localStorage.removeItem("token");
    navigate("/login");
  }
  return (
    <button
      className="mx-3 mt-8 flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
      onClick={logoutClick}
    >
      Logout
    </button>
  );
}

export default Logout;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const loggedIn = Boolean(isLoggedIn);
  // console.log(isLoggedIn, typeof isLoggedIn);
  return <>{loggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecureRoute;

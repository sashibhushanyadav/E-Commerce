import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const SecureRoute = () => {
  const isLoggedIn = sessionStorage.getItem("isLoggedIn");
  const loggedIn = Boolean(isLoggedIn);
  // console.log(isLoggedIn, typeof loggedIn);
  return <>{loggedIn ? <Outlet /> : <Navigate to="/" />}</>;
};

export default SecureRoute;

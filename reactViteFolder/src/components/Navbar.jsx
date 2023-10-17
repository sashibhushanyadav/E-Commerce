import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { successToast } from "../services/toastServices";

const Navbar = () => {
  const navigate = useNavigate();
  const logOutHandler = (e) => {
    e.preventDefault();
    sessionStorage.setItem("isLoggedIn", false);
    navigate("/");
    successToast('Log-out successfully')
  };
  return (
    <div className="d-flex justify-content-between mb-3">
      <div>
        <h3>Menu</h3>
      </div>
      <div>
        <Button variant="danger" onClick={logOutHandler}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Navbar;

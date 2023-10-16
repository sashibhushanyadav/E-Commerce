import axios from "axios";
import React, { useState } from "react";
import { Card } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import { errorToast, successToast } from "../services/toastServices";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  // or Call this onChange handler in within it
  // onChange={(e)=>{setEmail(e.target.value)}}
  // onChange={(e)=>{setPassword(e.target.value)}}
  // OR
  // In onChange handler
  const loginHandler = (e) => {
    e.preventDefault();
    if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "password") {
      setPassword(e.target.value);
    }
  };

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    // console.log(data);

    axios
      .post("https://backend-mu-pied.vercel.app/users/login", data)
      .then((resp) => {
        if (resp.data.status) {
          sessionStorage.setItem("isLoggedIn", true);

          navigation("/products");

          successToast(resp.data.message);
        }
        // console.log(resp)
      })
      .catch((err) => {
        // console.log('err', err.response.data.message)
        errorToast(err.response.data.message);
      });
  };
  return (
    <div>
      <Card>
        <fieldset>
          <legend>
            <h2>LogIn Page</h2>
          </legend>
          <div className="mb-2">
            <label htmlFor="email">
              <h5>Email:</h5>
            </label>
            <br />
            <input
              type="email"
              name="email"
              onChange={loginHandler}
              // or Call this onChange handler in within it
              // onChange={(e)=>{setEmail(e.target.value)}}
              className="bg-light text-dark"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">
              <h5>Password:</h5>
            </label>
            <br />
            <input
              type="password"
              name="password"
              onChange={loginHandler}
              // or Call this onChange handler in within it
              // onChange={(e)=>{setPassword(e.target.value)}}
              className="bg-light text-dark"
              placeholder="Enter Your Password"
            />
          </div>
          <button className="btn btn-success" onClick={loginSubmitHandler}>
            <strong>Login</strong>
          </button>
          <p>
            Don't have any account? <a href="./signup">Sign-Up</a>
          </p>
        </fieldset>
      </Card>
    </div>
  );
};

export default LoginPage;

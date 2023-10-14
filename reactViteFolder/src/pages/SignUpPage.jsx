import React, { useState } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { errorToast, successToast } from "../services/toastServices";

const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  // const signupHandler = (e) => {
  //   e.preventDefault();
  //   if(e.target.name==='fullName'){
  //     setFullName(e.target.value);
  //   }else if(e.target.name==='email'){
  //     setEmail(e.target.value)
  //   }else if(e.target.name==='password'){
  //     setPassword(e.target.value)
  //   }
  // };
  // But instead this i can prefer(just write the function within onChange)

  const signupSubmitHandler = async (e) => {
    e.preventDefault();
    // console.log(e);
    const data = {
      fullName,
      email,
      password,
    };
    // console.log(data);
    try {
      const resp = await axios.post(
        "https://backend-mu-pied.vercel.app/users/register",
        data
      );
      // console.log(resp);
      if (resp.data.status) {
        navigation("/");
        successToast(resp.data.message)
      }
    } catch (err) {
      // console.log('err',err)
      errorToast(err.response.data.message)
    }
  };

  return (
    <div>
      <Card>
        <form action="">
          <h2>Create Account</h2>
          <div className="mb-2">
            <label htmlFor="fullname">Full Name:</label>
            <br />
            <input
              type="text"
              name="fullName"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter Your FullName"
            />
          </div>
          <div className="mb-2 ">
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              // onChange={signupHandler}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your Email"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              // onChange={signupHandler}
              onChange={(e) => setPassword(e.target.value)}
              className="mb-2"
              placeholder="Create Your New Password"
            />
            {/* <br /> */}
            {/* <input type="text" placeholder="Re-enter Your New Password" /> */}
          </div>
          <button className="btn btn-success" onClick={signupSubmitHandler}>
            SignUp
          </button>
          <p>
            Do you have account? <a href="./">Log-In</a>
          </p>
        </form>
      </Card>
    </div>
  );
};

export default SignUpPage;

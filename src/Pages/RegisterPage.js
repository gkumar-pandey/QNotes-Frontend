import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import AlertMassage from "../Components/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverLink } from "../Components/common";
import Loading from "../Components/Loading";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [alertMsg, setAlertMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validInputs = (username, email, pass, confirmPass) => {
    // check all input are filled
    if (username == "" || pass == "" || confirmPass == "" || email == "") {
      setAlertMsg({
        msg: "Please Fill All inputs",
        serverity: "info",
      });
      return false;
    }
    // user name check
    if (username.length < 6) {
      setAlertMsg({
        msg: "username should have 6 character",
        serverity: "info",
      });
      return false;
    }
    // check length of password should be greater than 6
    if (pass.length < 6 || confirmPass.length < 6) {
      setAlertMsg({
        msg: "Password should have atleast 6 character",
        serverity: "warning",
      });
      return false;
    }
    if (pass !== confirmPass) {
      setAlertMsg({
        msg: "Password and confirm password not match",
        serverity: "warning",
      });
      return false;
    }

    return true;
  };

  const clearInputField = () => {
    setEmail("");
    setPassword("");
    setUserName("");
    setConfirmPassword("");
  };

  const register = async () => {
    const user = {
      username: userName,
      email: email,
      password: password,
    };
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${serverLink}user/signup`, user);
      setIsLoading(false);
      setAlertMsg({
        msg: "Register Successfully",
        serverity: "success",
      });
      clearInputField();
      setTimeout(() => {
        navigate("/login");
      }, 3000);
    } catch (error) {
      setAlertMsg({
        msg: error.response.data.message,
        serverity: "error",
      });
      console.error(error.response.data.message);
    }
  };

  const registerHandler = () => {
    const isValid = validInputs(userName, email, password, confirmPassword);
    if (isValid) {
      register();
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="heading">
          <h3>Sign Up</h3>
        </div>
        <div className="email-container">
          <label>Username</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="username"
          />
        </div>
        <div className="user-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="password-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className="password-container">
          <label>Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
          />
        </div>
        <div className="login-btn">
          <button onClick={registerHandler}>
            {isLoading && <Loading />}
            {!isLoading && "Log in"}
          </button>
        </div>
        <div>
          <p>Already Have Account ? </p>
          <Link to={"/login"}>Login</Link>
        </div>
      </div>
      <>
        {alertMsg ? (
          <AlertMassage message={alertMsg.msg} serverity={alertMsg.serverity} />
        ) : null}
      </>
    </div>
  );
};

export default RegisterPage;

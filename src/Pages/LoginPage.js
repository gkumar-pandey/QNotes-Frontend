import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { serverLink } from "../Components/common";
import axios from "axios";
import AlertMassage from "../Components/Alert";

const LoginPage = () => {
  const [alertMsg, setAlertMsg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const clearInputField = () => {
    setEmail("");
    setPassword("");
  };

  const loginBtnHandler = async () => {
    const user = {
      email: email,
      password: password,
    };
    try {
      const { data } = await axios.post(`${serverLink}user/signin`, user);
      const { token } = data;
      const userData = data.user;
      setAlertMsg({
        msg: "Login Successfull",
        serverity: "success",
      });
      clearInputField();
      localStorage.setItem("User", JSON.stringify(userData));
      localStorage.setItem("token", token);

      setTimeout(() => {
        navigate("/note");
      }, 3000);
    } catch (error) {
      setAlertMsg({
        msg: error.response.data.message,
        serverity: "error",
      });
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="heading">
          <h3>Login</h3>
        </div>
        <div className="email-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="abc@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-container">
          <label>Password</label>
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-btn">
          <button onClick={loginBtnHandler}>Login</button>
        </div>
        <div>
          <p>Don't Have Account ? </p>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
      <>
        {alertMsg ? (
          <AlertMassage message={alertMsg.msg} serverity={alertMsg.serverity} />
        ) : null}
      </>
      )
    </div>
  );
};

export default LoginPage;

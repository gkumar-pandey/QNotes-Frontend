import React, { useState } from "react";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import { serverLink } from "../Components/common";
import axios from "axios";
import { openNotificationWithIcon } from "../Components/AlertComp";
import Loading from "../Components/Loading";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const clearInputField = () => {
    setEmail("");
    setPassword("");
  };

  const login = async (user) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${serverLink}user/signin`, user);
      const { token } = data;
      const userData = data.user;

      setIsLoading(false);
      clearInputField();
      localStorage.setItem("User", JSON.stringify(userData));
      localStorage.setItem("token", JSON.stringify(token));
      openNotificationWithIcon("success", "Login Successfull");
      setTimeout(() => {
        navigate("/note");
      }, 3000);
    } catch (error) {
      openNotificationWithIcon("error", error.response.data.message);
      console.error(error.response.data.message);
      setIsLoading(false);
    }
  };

  const loginBtnHandler = () => {
    const user = {
      email: email,
      password: password,
    };
    login(user);
  };

  const loginWithTestCredential = () => {
    const testEmail = "test@gmail.com";
    const testPass = "12345678";
    const testUser = {
      email: testEmail,
      password: testPass,
    };
    setEmail(testEmail);
    setPassword(testPass);
    login(testUser);
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
          <button onClick={loginBtnHandler}>
            {isLoading && <Loading />}
            {!isLoading && "Log in"}
          </button>
          <button onClick={loginWithTestCredential}>
            Login with test credential
          </button>
        </div>
        <div>
          <p>Don't Have Account ? </p>
          <Link to={"/signup"}>Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

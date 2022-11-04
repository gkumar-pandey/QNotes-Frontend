import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { serverLink } from "../Components/common";
import Loading from "../Components/Loading";
import { openNotificationWithIcon } from "../Components/AlertComp";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validInputs = (username, email, pass, confirmPass) => {
    // check all input are filled
    if (username == "" || pass == "" || confirmPass == "" || email == "") {
      openNotificationWithIcon("warning", "Please Fill All inputs");
      return false;
    }
    // user name check
    if (username.length < 6) {
      openNotificationWithIcon(
        "warning",
        "username should have atleast 6 character"
      );

      return false;
    }
    // check length of password should be greater than 6
    if (pass.length < 6 || confirmPass.length < 6) {
      openNotificationWithIcon(
        "warning",
        "Password should have atleast 6 character"
      );
      return false;
    }
    if (pass !== confirmPass) {
      openNotificationWithIcon(
        "warning",
        "Password and confirm password not match"
      );
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

      openNotificationWithIcon("success", "Register Succesfully");
      clearInputField();
      setTimeout(() => {
        navigate("/");
      }, 3000);
    } catch (error) {
      openNotificationWithIcon("error", error.response.data.message);
      setIsLoading(false);
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
            {!isLoading && "Sign Up"}
          </button>
        </div>
        <div>
          <p>Already Have Account ? </p>
          <Link to={"/"}>Login</Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

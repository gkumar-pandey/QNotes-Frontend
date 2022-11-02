import React from "react";
import "./Button.css";

const Button = ({ title, onclickHandler }) => {
  return (
    <div className="btn-container">
      <button onClick={onclickHandler} className="button-65" role="button">
        {title}
      </button>
    </div>
  );
};

export default Button;

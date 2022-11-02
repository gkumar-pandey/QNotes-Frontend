import React from "react";
import "./Button.css";

const Button = ({ title }) => {
  return (
    <div className="btn-container">
      <button className="button-65" role="button">
        {title}
      </button>
    </div>
  );
};

export default Button;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

function Footer({ isDarkMode }) {
  const user = {
    githubHandle: "https://github.com/gkumar-pandey",
    linkedinHandle: "https://www.linkedin.com/in/gkpandey/",
    twitterHandle: "https://twitter.com/gautamkp078",
  };

  return (
    <div className="footer">
      <div className="footer-text">Developed By GKP</div>
      <div className="social-link">
        <a href={user.githubHandle} target="_blank">
          <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faGithubSquare} />
        </a>
        <a href={user.linkedinHandle} target="_blank">
          <FontAwesomeIcon style={{ fontSize: "2rem" }} icon={faLinkedin} />
        </a>
        <a href={user.twitterHandle} target="_blank">
          <FontAwesomeIcon
            style={{ fontSize: "2rem" }}
            icon={faTwitterSquare}
          />
        </a>
      </div>
    </div>
  );
}

export default Footer;

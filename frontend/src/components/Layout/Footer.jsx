import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By Praveenth.</div>
      <div>
        <Link to={"https://www.linkedin.com/in/praveenthr/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://github.com/praveenthravichandran/"} target="_blank">
          <FaGithub />
        </Link>
        <Link to={"https://www.facebook.com/login/"} target="_blank">
          <FaFacebookF />
        </Link>
        <Link to={"https://www.instagram.com/accounts/login/?hl=en"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;

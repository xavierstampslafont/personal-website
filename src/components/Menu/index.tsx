import React from "react";
import "./style.scss";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";

export default class Header extends React.Component {
  render() {
    return (
      <div className="components-header">
        <span>Work</span>
        <span>Education</span>
        <span>Skills</span>
        <span>
          <a
            href="mailto:xavierstampslafont@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoMdMail />
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/xavierstampslafont/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoLinkedin />
          </a>
        </span>
      </div>
    );
  }
}

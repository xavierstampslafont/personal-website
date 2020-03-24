import React from "react";
import "./style.scss";
import { IoLogoLinkedin, IoMdMail } from "react-icons/io";
import { Button, Icon } from "semantic-ui-react";

export default class Header extends React.Component {
  render() {
    return (
      <div className="components-header">
        <span>Xavier Stamps-Lafont</span>
        <span>Experience</span>
        <span>Education</span>
        <span>Skills</span>
        <span>
          <a href="mailto:xavierstampslafont@gmail.com">
            <IoMdMail />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/xavierstampslafont/">
            <IoLogoLinkedin />
          </a>
        </span>
      </div>
    );
  }
}

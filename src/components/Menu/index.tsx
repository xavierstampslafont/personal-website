import React from "react";
import "./style.scss";
import { Icon } from "semantic-ui-react";

export default class Menu extends React.Component {
  render() {
    return (
      <div className="components-menu">
        <span>Work</span>
        <span>Education</span>
        <span>Skills</span>
        <span>
          <a
            href="mailto:xavierstampslafont@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="mail" />
            xavierstampslafont@gmail.com
          </a>
        </span>
        <span>
          <a
            href="https://www.linkedin.com/in/xavierstampslafont/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="linkedin" />
            https://www.linkedin.com/in/xavierstampslafont/
          </a>
        </span>
      </div>
    );
  }
}

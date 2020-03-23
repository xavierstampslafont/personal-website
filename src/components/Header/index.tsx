import React from "react";
import "./style.scss";

export default class Header extends React.Component {
  render() {
    return (
      <div className="components-header">
        <span>Xavier Stamps-Lafont</span>
        <span>Experience</span>
        <span>Education</span>
        <span>Skills</span>
        <span>Tools</span>
        <span>Languages</span>
      </div>
    );
  }
}

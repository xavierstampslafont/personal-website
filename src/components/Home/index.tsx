import React from "react";
import "./style.scss";
import portrait from "../../images/portrait.jpg";
import ExtLink from "../ExtLink";
import links from "../ExtLink/links.json";
import { Link } from "react-router-dom";

export default class Intro extends React.Component {
  getText(): JSX.Element {
    return (
      <React.Fragment>
        <h1>Hello! I'm Xavier.</h1>
        <p>
          I'm a full stack software developer with 7 years of professional
          experience. I've worked on web-based products, SaaS software, and
          games. As a developer, my mission is to{" "}
          <Link to="work">create long-term value through code</Link>.
        </p>
        <p>
          Currently I work at{" "}
          <ExtLink to="https://www.x2omedia.com/">X2O Media</ExtLink>,
          developing high-end collaborative software that radically improves how
          people teach, learn and meet remotely.
        </p>
        <p>
          I have a master's degree in game development, and my thesis was on{" "}
          <Link to="thesis">designing a digital game for the family</Link>.
        </p>
        <p>
          I'm also a husband and a papa. Once upon a time,{" "}
          <ExtLink to={links.music}>I used to make music</ExtLink> as well as{" "}
          <ExtLink to={links.comics}>draw comics</ExtLink>. In my free time, I
          enjoy playing JRPGs.
        </p>
        <p>⬥</p>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="components-home">
        <table className="home-table">
          <tbody>
            <tr>
              <td>
                <img src={portrait} className="home-portrait" alt="" />
              </td>
              <td className="home-text">{this.getText()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

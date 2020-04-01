import React from "react";
import "./style.scss";
import portrait from "../../images/portrait.jpg";

export default class Intro extends React.Component {
  getText(): JSX.Element {
    return (
      <React.Fragment>
        <h1>Hello! I'm Xavier.</h1>
        <p>
          I'm a full stack software developer with 7 years of professional
          experience. I've worked on web-based products, SaaS software, and
          games. As a programmer, my mission is to{" "}
          <b>create long-term value through code</b>.
        </p>
        <p>
          Currently, I work at <a href="https://www.x2omedia.com/">X2O Media</a>{" "}
          developing high-end collaborative software that radically improves how
          people teach, learn and meet remotely.
        </p>
        <p>
          I'm also a husband and a papa. Once upon a time, I used to make music
          as well as draw comics. In my free time, I enjoy playing JRPGs.
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

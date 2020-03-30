import React from "react";
import "./style.scss";
import portrait from "../../images/portrait.jpg";

export default class Intro extends React.Component {
  render() {
    return (
      <div className="components-body">
        <table className="body-table">
          <tbody>
            <tr>
              <td>
                <img src={portrait} className="portrait" alt="" />
              </td>
              <td className="body-text">
                <h1>Hello! I'm Xavier.</h1>
                <p>
                  I'm a full stack developer with 7 years of professional
                  experience.
                </p>
                <p>
                  As a programmer, my mission is to create long-term value
                  through code.
                </p>
                <p>
                  My main tools for achieving this are clean code, refactoring,
                  TDD.
                </p>
                <p>
                  I love writing scripts and reusable code components which
                  improve development quality and speed!
                </p>
                <p>
                  I'm team oriented, with high consideration for my colleagues’
                  well-being.
                </p>
                <p>
                  Currently, I work at{" "}
                  <a href="https://www.x2omedia.com/">X2O Media</a> developing a
                  high-end web-based product that radically improves remote
                  collaboration.
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

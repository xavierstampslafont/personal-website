import React from "react";
import "./style.scss";
import portrait from "../../images/portrait.jpg";
import { Grid, Image } from "semantic-ui-react";

export default class Body extends React.Component {
  render() {
    return (
      <Grid className="components-body" columns={2} verticalAlign="middle">
        <Grid.Row>
          <Grid.Column>
            <Image src={portrait} id="portrait" />
          </Grid.Column>
          <Grid.Column>
            <h1>Hello! I'm Xavier.</h1>
            <p>
              I'm a full stack developer with 7 years of professional
              experience.
            </p>
            <p>
              As a programmer, I specialize in clean code, TDD, and refactoring.
            </p>
            <p>
              I love writing scripts and reusable code which improve development
              quality and speed!
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
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

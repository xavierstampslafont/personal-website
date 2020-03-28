import React from "react";
import "./style.scss";
import Intro from "../Intro";
import Divider from "../Divider";
import ListSection from "../ListSection";
import EducationData from "./education.json";
import WorkData from "./work.json";
import SkillsData from "./skills.json";

export default class Body extends React.Component {
  render() {
    return (
      <div className="components-body">
        <Intro />
        <Divider />
        <ListSection header="Work" data={WorkData} />
        <Divider />
        <ListSection header="Education" data={EducationData} />
        <Divider />
        <ListSection header="Skills" data={SkillsData} />
      </div>
    );
  }
}

import React from "react";
import { Icon, Table, TableCell } from "semantic-ui-react";
import work from "./work.json";

export const Work = (): JSX.Element => (
  <div className="components-work">
    <h1>Work</h1>
    <h2>Professional Experience</h2>
    <Table
      basic="very"
      compact="very"
      tableData={work.data}
      renderBodyRow={workFactory}
    />
  </div>
);

const workFactory = (work: {
  time: string;
  title: string;
  description: string;
  company: string;
  location: string;
  tech: string;
  processes: string;
  points: string[];
}): JSX.Element => (
  <Table.Row verticalAlign="top" key={work.time}>
    <Table.Cell>
      <p>{work.time}</p>
      <p>
        <Icon name="briefcase" />
        {work.company}
      </p>
      <p>
        <Icon name="map marker alternate" />
        {work.location}
      </p>
    </Table.Cell>
    <Table.Cell>
      <p>
        <b>{work.title}</b>
      </p>
      <p>
        <Icon name="info circle" />
        {work.description}
      </p>
      <p>
        <Icon name="code" />
        {work.tech}
      </p>
      <p>
        <Icon name="cog" />
        {work.processes}
      </p>
      {work.points.map((x) => (
        <p>
          <Icon name="caret right" />
          {x}
        </p>
      ))}
    </Table.Cell>
  </Table.Row>
);

import React from "react";
// import { Icon, SemanticICONS, Table } from "semantic-ui-react";
import work from "./work.json";

export const Work = (): JSX.Element => (
  <div className="components-work">
    <h1>Work</h1>
    <h2>Professional Experience</h2>
    {/* <Table
      basic="very"
      compact="very"
      tableData={work.data}
      renderBodyRow={workFactory}
    /> */}
  </div>
);

// const workFactory = (work: {
//   time: string;
//   title: string;
//   description: string;
//   company: string;
//   location: string;
//   tech: string;
//   processes: string;
//   points: string[];
// }): JSX.Element => (
//   <Table.Row verticalAlign="top" key={work.time}>
//     <Table.Cell>
//       <p>{work.time}</p>
//       <IconAndText icon="briefcase" text={work.company} />
//       <IconAndText icon="map marker alternate" text={work.location} />
//     </Table.Cell>
//     <Table.Cell>
//       <p>
//         <b>{work.title}</b>
//       </p>
//       <IconAndText icon="code" text={work.tech} />
//       <IconAndText icon="cog" text={work.processes} />
//       {work.points?.map((x) => (
//         <IconAndText icon="caret right" text={x} />
//       ))}
//     </Table.Cell>
//   </Table.Row>
// );

// const IconAndText = (props: {
//   icon: SemanticICONS;
//   text: string;
// }): JSX.Element => (
//   <p>
//     <Icon name={props.icon} />
//     {props.text}
//   </p>
// );

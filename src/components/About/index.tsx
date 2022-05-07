import React from "react";
import "./style.scss";
import { Icon, SemanticICONS, Table } from "semantic-ui-react";
import broadStrokes from "./broadStrokes.json";

interface Event {
  category: string;
  description: string;
}

interface YearEvents {
  year: number;
  events: Event[];
}

const eventCategoryToIconMap = new Map<string, SemanticICONS>([
  ["personal", "heart"],
  ["relocation", "plane"],
  ["education", "university"],
  ["professional", "travel"],
]);

export const About = (): JSX.Element => (
  <div className="components-about components-content">
    <h1>About</h1>
    <p className="center">Here's my life in broad strokes:</p>
    <Table
      basic="very"
      compact="very"
      collapsing
      tableData={broadStrokes.data}
      renderBodyRow={yearFactory}
    />
  </div>
);

const yearFactory = (yearEvents: YearEvents): JSX.Element => (
  <Table.Row verticalAlign="top" key={yearEvents.year}>
    <Table.Cell content={yearEvents.year} />
    <Table.Cell>{yearEvents.events.map(eventFactory)}</Table.Cell>
  </Table.Row>
);

const eventFactory = (event: Event): JSX.Element => (
  <p key={event.description}>
    <Icon name={getIcon(event.category)} />
    {event.description}
  </p>
);

const getIcon = (eventCategory: string): SemanticICONS => {
  if (eventCategoryToIconMap.has(eventCategory)) {
    return eventCategoryToIconMap.get(eventCategory) as SemanticICONS;
  }
  throw new Error(`Event category ${eventCategory} is missing icon mapping`);
};

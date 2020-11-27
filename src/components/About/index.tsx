import React from "react";
import "./style.scss";
import { Icon, Table } from "semantic-ui-react";
import broadStrokes from "./broadStrokes.json";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface Event {
  category: string;
  description: string;
}

interface YearEvents {
  year: number;
  events: Event[];
}

export default class About extends React.Component {
  private eventCategoryToIconMap = new Map<string, SemanticICONS>([
    ["personal", "heart"],
    ["relocation", "plane"],
    ["education", "university"],
    ["professional", "travel"],
  ]);

  constructor(props: any) {
    super(props);

    this.yearFactory = this.yearFactory.bind(this);
    this.eventFactory = this.eventFactory.bind(this);
  }

  getIcon(eventCategory: string): SemanticICONS {
    if (this.eventCategoryToIconMap.has(eventCategory)) {
      return this.eventCategoryToIconMap.get(eventCategory) as SemanticICONS;
    }
    throw new Error(`Event category ${eventCategory} is missing icon mapping`);
  }

  eventFactory(event: Event): JSX.Element {
    return (
      <p key={event.description}>
        <Icon name={this.getIcon(event.category)} />
        {event.description}
      </p>
    );
  }

  yearFactory(yearEvents: YearEvents): JSX.Element {
    return (
      <Table.Row verticalAlign="top" key={yearEvents.year}>
        <Table.Cell content={yearEvents.year} />
        <Table.Cell>{yearEvents.events.map(this.eventFactory)}</Table.Cell>
      </Table.Row>
    );
  }

  render() {
    return (
      <div className="components-about components-content">
        <h1>About</h1>
        <p className="center">
          Here's my life in broad strokes of years and events:
        </p>
        <Table
          basic="very"
          compact="very"
          collapsing
          tableData={broadStrokes.data}
          renderBodyRow={this.yearFactory}
        />
      </div>
    );
  }
}

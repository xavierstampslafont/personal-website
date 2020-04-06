import React from "react";
import "./style.scss";
import { Icon } from "semantic-ui-react";
import broadStrokes from "./broadStrokes.json";
import { SemanticICONS } from "semantic-ui-react/dist/commonjs/generic";

interface YearEvents {
  year: number;
  events: {
    category: string;
    description: string;
  }[];
}

export default class About extends React.Component {
  private eventCategoryToIconMap = new Map<string, SemanticICONS>([
    ["personal", "heart"],
    ["relocation", "world"],
    ["education", "university"],
    ["professional", "travel"]
  ]);

  constructor(props: any) {
    super(props);

    this.yearFactory = this.yearFactory.bind(this);
  }

  yearFactory(yearEvents: YearEvents): JSX.Element {
    return (
      <p>
        {yearEvents.year} -{" "}
        {yearEvents.events.map(event => {
          const icon = this.eventCategoryToIconMap.has(event.category)
            ? this.eventCategoryToIconMap.get(event.category)
            : "question";
          return (
            <React.Fragment>
              <Icon name={icon} />
              {event.description}
            </React.Fragment>
          );
        })}
      </p>
    );
  }

  render() {
    return (
      <div className="components-about">
        <h1>About</h1>
        <p>
          It's funny how one's life can be painted in broad strokes of years and
          events:
        </p>
        {broadStrokes.data.map(this.yearFactory)}
        <p>As you can see, I've lived in many places.</p>
      </div>
    );
  }
}

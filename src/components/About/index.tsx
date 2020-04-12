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
    ["professional", "travel"]
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
      <p>
        <Icon name={this.getIcon(event.category)} />
        {event.description}
      </p>
    );
  }

  yearFactory(yearEvents: YearEvents): JSX.Element {
    return (
      <Table.Row verticalAlign="top">
        <Table.Cell content={yearEvents.year} />
        <Table.Cell>{yearEvents.events.map(this.eventFactory)}</Table.Cell>
      </Table.Row>
    );
  }

  getDetail = () => {
    return (
      <React.Fragment>
        <p>
          When I was in college, I spent a good deal of time thinking about what
          I want to do with my life. My thoughts were filled with video games.
          You see, I grew up during a great time in games, the late SNES era and
          the PSX era. In particular, the JRPG genre captivated me – Japanese
          role-playing games (e.g. Final Fantasy). I decided to get into music
          so I could work in games. This led to my majoring in music with an
          emphasis in composition, as well as my other major in Japanese
          language and culture.
        </p>
        <p>
          Further down the line, I found that I would likely need a master's
          degree in order to work in the industry. It felt risky to spend an
          entire degree on something more specialized like this. However, I
          strongly believe in living a life without regrets. I was <i>not</i>{" "}
          interested in getting to 80 years old and regretting that I never
          tried to get into games. So I moved to Denmark for this graduate
          program in game development, one of the few programs in Europe that
          offered an actual game design line.
        </p>
        <p>
          After I completed my studies, I worked a tech support job for a year,
          after which I received a job offer at one of Denmark's larger and more
          popular game studios. I accepted the offer and worked there for nearly
          5 years. During my time in Denmark, I also met Ashley, who is stellar.
          We later married and had a baby. So my gamble worked out very well in
          more ways than one!
        </p>
        <p>
          Eventually, I was subject to one of the harsh realities of the game
          industry. Within a year of moving to another one of Denmark's more
          well known game studios, I was part of a mass layoff. I decided that I
          and my family deserve more stability than what the industry was known
          for. Fortunately, I had become a good developer and great teammate. I
          found another job as a developer outside of the game industry, and I
          haven't looked back since.
        </p>
        <p>
          Make no mistake, I'm still very much interested in making games!
          However, this interest is now a hobby. The only difficulty is it
          competes with my other interests: improving as a software developer,
          writing music, <i>playing</i> games, making comics... the list goes
          on!
        </p>
        <p>
          Wow, you sat through all of that! Thank you. Now check out my other
          pages.
        </p>
      </React.Fragment>
    );
  };

  render() {
    return (
      <div className="components-about">
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
        <h2 className="center">In more detail...</h2>
        {this.getDetail()}
      </div>
    );
  }
}

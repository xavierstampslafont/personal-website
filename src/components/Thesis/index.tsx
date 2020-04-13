import React from "react";
import ExtLink from "../ExtLink";
import "./style.scss";

const Heading = (props: { text: string; className?: string }) => {
  return (
    <p className={props.className}>
      <b>{props.text}</b>
    </p>
  );
};

const HeadingWithInlineContent = (props: {
  text: string;
  content: string | JSX.Element;
}) => {
  return (
    <p>
      <b>{props.text}</b>: {props.content}
    </p>
  );
};

export default class Thesis extends React.Component {
  renderDownloadLinks(
    links: {
      text: string;
      to: string;
      sizeInMb: string;
    }[]
  ): JSX.Element {
    return (
      <span>
        {links.map((pair, index) => {
          return (
            <span key={pair.text}>
              <ExtLink to={pair.to}>
                {`${pair.text} (${pair.sizeInMb} MB)`}
              </ExtLink>
              {index < links.length - 1 && " | "}
            </span>
          );
        })}
      </span>
    );
  }

  render() {
    return (
      <div className="components-thesis components-content">
        <h1>Designing a Digital Game for the Family</h1>
        <Heading
          text="Master's thesis submitted to IT University of Copenhagen in 2011"
          className="center"
        />
        <HeadingWithInlineContent
          text="Authors"
          content="Filip Lange-Nielsen, Benjamin Cassar, Xavier Stamps-Lafont"
        />
        <HeadingWithInlineContent
          text="Supervisor"
          content={<ExtLink to="http://rillakhaled.com/">Rilla Khaled</ExtLink>}
        />
        <Heading text="Research question" />
        <p>
          What might a game design process look like for a game that stimulates
          and encourages family discussion and interaction, that can be played
          by players asynchronously and at different locations, and that caters
          for players with different levels of commitment, effort and skill?
        </p>
        <Heading text="Problem formulation" />
        <p>
          Families want to spend time with each other. Earlier, one of the
          activities that drew families together were for instance board games.
          Board games can be seen as a means to invite play and social
          interaction between family members. However, families today have
          become busier and have increasingly separate time schedules. Also,
          families can live in different and distant locations. Therefore
          organizing activities where members have to meet at the same time and
          place for longer periods of time, such as with board games, might not
          be so feasible as it might have used to be.
        </p>
        <p>
          Many video games continue to cater to the young white male
          demographic. This despite the fact that the gamer demographic has
          changed significantly over the last decade. As the first gamer
          generations are growing up, becoming parents and starting families,
          the possibility of gamers having different ages and genders has
          increased. Furthermore game companies have shown a new conscious
          broadening of the target market in their business strategies. Worth
          mentioning is Nintendo with their handheld DS and Wii console,
          innovations which became extremely popular, some might say
          democratizing play.
        </p>
        <p>
          With increasingly separate family schedules and a gamer culture
          maturing, a game that supports different levels of player commitment
          and player effort would be beneficial. We want to create a digital
          game that also allows players to play the same game together but at
          different times and locations. A digital game that the whole family
          will enjoy to play together – but not together. By sharing a game
          experience with each other at their individual leisure and coming
          together outside the game to discuss it, we hope the game facilitates
          renewed real life social interaction between the members of the family
          through play.
        </p>
        <Heading text="Methods" />
        <ul>
          <li>Cultural probes</li>
          <li>Semi-structured interviews analyzed using grounded theory</li>
          <li>Prototyping, both paper and digital</li>
        </ul>
        <Heading text="Results" />
        <p>
          We produced comparable game prototypes that we feel met several of our
          experience goals, as well as incorporating may findings from our
          design research. While our design research was meant purely for
          inspiration, we believe our findings can serve as starting points for
          further work on how to design for families and how to understand
          family interactions.
        </p>
        <p>
          We found that cultural probes and interviews are viable methods for
          concept development in game design. They yielded a wealth of
          information and inspirational materials. In our case, the methods
          worked well together because they complemented each other in many
          ways. The cultural probes approach allowed us to have an empathic
          “conversation” with the participants through the probe activities. Our
          approach to the interview analysis helped us reach a deeper
          understanding of the participants.
        </p>
        <p>
          The materials produced in our design research focused our
          brainstorming, enabling us to have cooperative and productive
          sessions.
        </p>
        <p>
          Over the course of our project, we deepened our understanding of
          different prototyping techniques. Parallel prototyping enabled us to
          cover a breadth of design ideas. We also learned that all the
          properties of a prototype can impact is design. In the end, we
          discovered that the hot-seat setup, which had just been a playtest
          consideration, had become an integral part of a game. It is in
          playtesting that these discoveries can be made. Playtesting can
          uncover many hidden surprises in the design and the player behavior it
          affords. In playtesting we found that some of our experience goals
          were met in ways we did not intentionally design.
        </p>
        <p>
          Our goal in the beginning of this project was to make an asynchronous
          game as we thought that might be a good solution for a busy family. We
          developed non-asynchronous prototypes with the idea that they would be
          asynchronous after future development. While it would be possible to
          play these games asynchronously and keep working on them in that
          direction, some designs are better suited than others for further
          development in an asynchronous direction. When families play any game,
          their physical closeness and sense of presence are significant factors
          for the designer to keep in mind.
        </p>
        <p>
          We observed that our designs led to increased family interactions
          while they were playing. Consequently, we believe that these designs
          have the potential for becoming successful family games.
        </p>
        <p>
          We have reported on an exploratory player-centered design process
          which incorporated methods from other design disciplines. With this
          project, we feel we have contributed to the understanding of design
          processes of family games.
        </p>
        <Heading text="Downloads" />
        <p>
          Full thesis:{" "}
          {this.renderDownloadLinks([
            {
              text: "PDF",
              to:
                "https://www.dropbox.com/s/plj2q7f128g5hth/Lange-Nielsen%2C%20Cassar%2C%20%26%20Stamps-Lafont%20-%20Thesis.pdf?dl=0",
              sizeInMb: "1"
            }
          ])}
        </p>
        <p>
          Dungeon Maze Prototype:{" "}
          {this.renderDownloadLinks([
            {
              text: "Windows",
              to:
                "https://www.dropbox.com/s/in1pqdhcbmalm88/Dungeon%20Maze%20%28Windows%29.zip?dl=0",
              sizeInMb: "2"
            },
            {
              text: "Mac",
              to:
                "https://www.dropbox.com/s/jl35siaf8lcj4g7/Dungeon%20Maze%20%28Mac%29.zip?dl=0",
              sizeInMb: "3"
            }
          ])}
        </p>
      </div>
    );
  }
}

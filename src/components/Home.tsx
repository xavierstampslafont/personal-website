import { intervalToDuration } from "date-fns";
import React from "react";
import styled from "styled-components";
import portrait from "../images/portrait.jpg";
import { ExternalLink } from "./ExternalLink";

const FIRST_DEV_WORK = new Date(2011, 0);
const DEV_EXPERIENCE_DURATION = intervalToDuration({
  start: FIRST_DEV_WORK,
  end: new Date(),
});

export const Home = () => (
  <StyledHome>
    <Portrait />
    <BodyText />
  </StyledHome>
);

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 1em;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`;

const Portrait = () => (
  <StyledPortrait
    src={portrait}
    alt="Xavier on a sunny day"
    width="400px"
    height="400px"
  />
);

const StyledPortrait = styled.img`
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  width: 80%;
  height: 80%;

  margin-bottom: 1em;

  @media only screen and (min-width: 25em) {
    width: 25em;
    height: 25em;

    margin-bottom: 0;

    @media (min-width: 768px) {
      position: fixed;
      top: calc(50vh - 40vw / 2);
      right: 60vw;
      width: 40vw;
      height: 40vw;

      // 1000px corresponds to 768px + 25em. No calc() in media queries!
      @media (min-width: 1000px) {
        top: calc(50vh - 25em / 2);
        width: 25em;
        height: 25em;
      }
    }
  }
`;

const BodyText = () => (
  <StyledBodyText>
    <h1>Hello! I'm Xavier.</h1>
    <Emoji>🙋‍♂️</Emoji>
    <p>
      I'm a full stack software developer with {DEV_EXPERIENCE_DURATION.years}{" "}
      years of experience in SaaS and games. As a developer, my mission is to
      build long-term value through code. I achieve this by specializing in
      clean code and refactoring.
    </p>
    <Emoji>💼</Emoji>
    <p>
      Currently I work at{" "}
      <ExternalLink to={"https://swiftconnect.io/"}>SwiftConnect</ExternalLink>,
      where we are developing a new platform that unifies and orchestrates
      access control, user directory, visitor management, and space management
      systems. For more on my professional experience, visit my{" "}
      <ExternalLink to={"https://www.linkedin.com/in/xavierstampslafont/"}>
        LinkedIn profile
      </ExternalLink>
      .
    </p>
    <Emoji>🎓</Emoji>
    <p>
      I have a M.Sc. in game development and design, and my thesis was on
      designing digital games for families. I also have a B.A. with double major
      in music composition and Japanese.
    </p>
    <Emoji>👨‍👩‍👧‍👦</Emoji>
    <p>
      I'm also a husband, and a papa of two. In my free time, I enjoy spending
      time with my family, playing video and board games, and making things.
      Over the years, I've made{" "}
      <ExternalLink to={"https://xavierstampslafont.itch.io/"}>
        games
      </ExternalLink>
      ,{" "}
      <ExternalLink to={"https://soundcloud.com/xavierstampslafont"}>
        music
      </ExternalLink>{" "}
      and{" "}
      <ExternalLink to={"https://howsyouroktea.wordpress.com/"}>
        comics
      </ExternalLink>
      .
    </p>
    <p>
      Countries I've lived in:
      <br />
      <Emoji title="India">🇮🇳</Emoji> <Emoji title="USA">🇺🇸</Emoji>{" "}
      <Emoji title="France">🇫🇷</Emoji> <Emoji title="Denmark">🇩🇰</Emoji>{" "}
      <Emoji title="Canada">🇨🇦</Emoji>
    </p>
  </StyledBodyText>
);

const StyledBodyText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 35em;

  @media only screen and (min-width: 768px) {
    position: absolute;
    left: 40vw;

    // Natural height of the container. Converting px to em didn't work well, so sticking with this
    @media (min-height: 635px) {
      justify-content: center;
      height: 100vh;
    }
  }
`;

const Emoji = styled.span`
  font-size: 1.75em;
`;

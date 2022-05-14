import { intervalToDuration } from "date-fns";
import React from "react";
import styled from "styled-components";
import portrait from "../../images/portrait.jpg";
import { ExtLink } from "../ExtLink";
import links from "../ExtLink/links.json";

const FIRST_DEV_WORK = new Date(2011, 0);
const DEV_EXPERIENCE_DURATION = intervalToDuration({
  start: FIRST_DEV_WORK,
  end: new Date(),
});

const StyledTable = styled.table`
  height: 90vh;
`;

const StyledPortrait = styled.img`
  width: 25em;
  height: 25em;
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
`;

const StyledCell = styled.td`
  width: 40em;
  text-align: center;
  padding: 0 2em;
`;

const StyledEmoji = styled.span`
  font-size: 1.75em;
`;

export const Home = (): JSX.Element => (
  <div className="components-home">
    <StyledTable>
      <tbody>
        <tr>
          <td>
            <StyledPortrait src={portrait} alt="Xavier on a sunny day" />
          </td>
          <StyledCell className="home-text">{getText()}</StyledCell>
        </tr>
      </tbody>
    </StyledTable>
  </div>
);

const getText = () => {
  return (
    <>
      <h1>Hello! I'm Xavier.</h1>
      <StyledEmoji>🙋‍♂️</StyledEmoji>
      <p>
        {`I'm a full stack software developer with ${DEV_EXPERIENCE_DURATION.years} years
        of experience in SaaS and games. 
        As a developer, my mission is to create long-term value through code. 
        I achieve this by specializing in clean code and refactoring.`}
      </p>
      <StyledEmoji>💼</StyledEmoji>
      <p>
        Currently I work at{" "}
        <ExtLink to={"https://swiftconnect.io/"}>SwiftConnect</ExtLink>,
        developing a new platform that unifies and orchestrates access control,
        user directory, visitor management, and space management systems. For
        more on my professional experience, visit my{" "}
        <ExtLink to={links.linkedin}>LinkedIn profile</ExtLink>.
      </p>
      <StyledEmoji>🎓</StyledEmoji>
      <p>
        I have a M.Sc. in game development and design, and my thesis was on
        designing a digital game for the family. I also have a B.A. with double
        major in music composition and Japanese.
      </p>
      <StyledEmoji>👨‍👩‍👧‍👦</StyledEmoji>
      <p>
        I'm also a husband, and a papa of two. In my free time, I enjoy spending
        time with my family, playing video and board games, and making things.
        Over the years, I've made <ExtLink to={links.games}>games</ExtLink>,{" "}
        <ExtLink to={links.music}>music</ExtLink> and{" "}
        <ExtLink to={links.comics}>comics</ExtLink>.
      </p>
      <p>
        Countries I've lived in:
        <br />
        <StyledEmoji>
          <span title="India">🇮🇳</span> <span title="USA">🇺🇸</span>{" "}
          <span title="France">🇫🇷</span> <span title="Denmark">🇩🇰</span>{" "}
          <span title="Canada">🇨🇦</span>
        </StyledEmoji>
      </p>
    </>
  );
};

import React from "react";
import "./style.scss";
import portrait from "../../images/portrait.jpg";
import { ExtLink } from "../ExtLink";
import links from "../ExtLink/links.json";
import { intervalToDuration } from "date-fns";

const FIRST_DEV_WORK = new Date(2011, 0);
const DEV_EXPERIENCE_DURATION = intervalToDuration({
  start: FIRST_DEV_WORK,
  end: new Date(),
});

export const Home = (): JSX.Element => (
  <div className="components-home">
    <table className="home-table">
      <tbody>
        <tr>
          <td>
            <img
              src={portrait}
              className="home-portrait"
              alt="Xavier on a sunny day"
            />
          </td>
          <td className="home-text">{getText()}</td>
        </tr>
      </tbody>
    </table>
  </div>
);

const getText = () => {
  return (
    <>
      <h1>Hello! I'm Xavier.</h1>
      <p>
        {`I'm a full stack software developer with ${DEV_EXPERIENCE_DURATION.years} years
        of experience in SaaS and games. 
        As a developer, my mission is to create long-term value through code. 
        I achieve this by specializing in clean code and refactoring.`}
      </p>
      <p>
        Currently I work at{" "}
        <ExtLink to={"https://swiftconnect.io/"}>SwiftConnect</ExtLink>,
        developing a new platform that unifies and orchestrates access control,
        user directory, visitor management, and space management systems.
      </p>
      <p>
        I have a M.Sc. in game development and design, and my thesis was on
        designing a digital game for the family. I also have a B.A. with double
        major in music composition and Japanese.
      </p>
      <p>
        I'm also a husband, and a papa of two. Over the years, I've made{" "}
        <ExtLink to={links.games}>games</ExtLink>,{" "}
        <ExtLink to={links.music}>music</ExtLink> and{" "}
        <ExtLink to={links.comics}>comics</ExtLink>. In my free time, I enjoy
        spending time with my family, playing video and board games, and
        becoming a better developer.
      </p>
      <p>
        Countries I've lived in:
        <br />
        <span className="countries">🇮🇳 🇺🇸 🇫🇷 🇩🇰 🇨🇦</span>
      </p>
    </>
  );
};

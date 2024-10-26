import { intervalToDuration } from "date-fns"
import React from "react"
import styled from "styled-components"
import { ExternalLink } from "../../components"
import { Portrait } from "./Portrait"

const FIRST_DEV_WORK = new Date(2011, 0)
const DEV_EXPERIENCE_DURATION = intervalToDuration({
  start: FIRST_DEV_WORK,
  end: new Date(),
})

export const HomeScreen = () => (
  <StyledHomeScreen>
    <Portrait />
    <BodyText />
  </StyledHomeScreen>
)

const StyledHomeScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3em 1em;

  @media only screen and (min-width: 768px) {
    margin: 0;
  }
`

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
      I have worked in a diverse range of industries, including access
      management, communication, retail, fintech and video games. In addition, I
      have worked across different types of companies, from startups to
      consultancy, and even a unicorn. For more on my professional experience,
      visit my{" "}
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
    <Emoji>🧑‍🧑‍🧒‍🧒</Emoji>
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
      <Emoji title="Japan">🇯🇵</Emoji> <Emoji title="France">🇫🇷</Emoji>{" "}
      <Emoji title="Denmark">🇩🇰</Emoji> <Emoji title="Canada">🇨🇦</Emoji>
    </p>
  </StyledBodyText>
)

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
`

const Emoji = styled.span`
  font-size: 1.75em;
`

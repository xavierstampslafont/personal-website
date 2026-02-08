import { intervalToDuration } from "date-fns"
import React from "react"
import { ExternalLink } from "../../components"
import styles from "./HomeScreen.module.css"
import { Portrait } from "./Portrait"

const FIRST_DEV_WORK = new Date(2011, 0)
const DEV_EXPERIENCE_DURATION = intervalToDuration({
  start: FIRST_DEV_WORK,
  end: new Date(),
})

export const HomeScreen = () => (
  <div className={styles.homeScreen}>
    <Portrait />
    <BodyText />
  </div>
)

const BodyText = () => (
  <div className={styles.bodyText}>
    <h1>Hello! I'm Xavier.</h1>
    <span className={styles.emoji}>🙋‍♂️</span>
    <p>
      I'm a senior full-stack product engineer with{" "}
      {DEV_EXPERIENCE_DURATION.years} years of experience building SaaS and game
      systems. I take ownership of complex initiatives end-to-end, helping teams
      deliver practical, reliable, and maintainable software.
    </p>
    <span className={styles.emoji}>💼</span>
    <p>
      As a software developer, I have worked in a diverse range of industries,
      including maintenance management, access management, communication,
      retail, fintech and video games. In addition, I have worked across
      different types of companies, from startups to consultancy, and even a
      unicorn. For more on my professional experience, visit my{" "}
      <ExternalLink to={"https://www.linkedin.com/in/xavierstampslafont/"}>
        LinkedIn profile
      </ExternalLink>
      .
    </p>
    <span className={styles.emoji}>🎓</span>
    <p>
      I have a M.Sc. in game development and design, and my thesis was on
      designing digital games for families. I also have a B.A. with double major
      in music composition and Japanese.
    </p>
    <span className={styles.emoji}>🧑‍🧑‍🧒‍🧒</span>
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
      <span className={styles.emoji} title="India">
        🇮🇳
      </span>{" "}
      <span className={styles.emoji} title="USA">
        🇺🇸
      </span>{" "}
      <span className={styles.emoji} title="Japan">
        🇯🇵
      </span>{" "}
      <span className={styles.emoji} title="France">
        🇫🇷
      </span>{" "}
      <span className={styles.emoji} title="Denmark">
        🇩🇰
      </span>{" "}
      <span className={styles.emoji} title="Canada">
        🇨🇦
      </span>
    </p>
  </div>
)

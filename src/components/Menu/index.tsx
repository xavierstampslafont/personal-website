import React from "react";
import "./style.scss";
// import { Icon, SemanticICONS } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import links from "../ExtLink/links.json";
import { ExtLink } from "../ExtLink";

interface Item {
  label: string;
  // icon: SemanticICONS;
  link: string;
  external?: boolean;
}

export const Menu = (): JSX.Element => (
  // <div className="components-menu">{getItems().map(itemFactory)}</div>
  <div className="components-menu"></div>
);

// const getItems = (): Item[] => [
//   {
//     label: "Home",
//     icon: "home",
//     link: "/",
//   },
//   {
//     label: "About",
//     icon: "user",
//     link: "/about",
//   },
//   {
//     label: "Work",
//     icon: "code",
//     link: "/work",
//   },
//   {
//     label: "Thesis",
//     icon: "university",
//     link: "/thesis",
//   },
//   {
//     label: "Games",
//     icon: "game",
//     link: "https://xavierstampslafont.itch.io/",
//     external: true,
//   },
//   {
//     label: "Music",
//     icon: "music",
//     link: links.music,
//     external: true,
//   },
//   {
//     label: "Comics",
//     icon: "pencil",
//     link: links.comics,
//     external: true,
//   },
//   {
//     label: "Email",
//     icon: "mail",
//     link: "mailto:xavierstampslafont@gmail.com",
//     external: true,
//   },
//   {
//     label: "LinkedIn",
//     icon: "linkedin",
//     link: "https://www.linkedin.com/in/xavierstampslafont/",
//     external: true,
//   },
// ];

const itemFactory = (item: Item): JSX.Element => {
  const content = (
    <React.Fragment>
      {/* <Icon name={item.icon} /> */}
      {item.label}
    </React.Fragment>
  );

  if (item.external) {
    return (
      <ExtLink key={item.label} to={item.link}>
        {content}
      </ExtLink>
    );
  }

  return (
    <NavLink
      key={item.label}
      to={item.link}
      className={({ isActive }) => (isActive ? "active" : "")}
      end
    >
      {content}
    </NavLink>
  );
};

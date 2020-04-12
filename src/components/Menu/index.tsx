import React from "react";
import "./style.scss";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import ExtLink from "../ExtLink";
import links from "../ExtLink/links.json";

interface Item {
  label: string;
  icon: SemanticICONS;
  link: string;
  external?: boolean;
}

export default class Menu extends React.Component {
  getItems(): Item[] {
    return [
      {
        label: "Home",
        icon: "home",
        link: "/"
      },
      {
        label: "About",
        icon: "user",
        link: "/about"
      },
      {
        label: "Work",
        icon: "code",
        link: "/work"
      },
      {
        label: "Thesis",
        icon: "university",
        link: "/thesis"
      },
      {
        label: "Music",
        icon: "music",
        link: links.music,
        external: true
      },
      {
        label: "Comics",
        icon: "pencil",
        link: links.comics,
        external: true
      },
      {
        label: "Email",
        icon: "mail",
        link: "mailto:xavierstampslafont@gmail.com",
        external: true
      },
      {
        label: "LinkedIn",
        icon: "linkedin",
        link: "https://www.linkedin.com/in/xavierstampslafont/",
        external: true
      }
    ];
  }

  linkFactory(item: Item): JSX.Element {
    const content = (
      <React.Fragment>
        <Icon name={item.icon} />
        {item.label}
      </React.Fragment>
    );

    if (item.external) {
      return <ExtLink to={item.link}>{content}</ExtLink>;
    }

    return (
      <NavLink to={item.link} activeClassName="active" exact>
        {content}
      </NavLink>
    );
  }

  render() {
    return (
      <div className="components-menu">
        {this.getItems().map(item => {
          return <span key={item.label}>{this.linkFactory(item)}</span>;
        })}
      </div>
    );
  }
}

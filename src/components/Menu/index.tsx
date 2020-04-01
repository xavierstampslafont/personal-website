import React from "react";
import "./style.scss";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        label: "Bio",
        icon: "user",
        link: "/bio"
      },
      {
        label: "Work",
        icon: "code",
        link: "/work"
      },
      {
        label: "Music",
        icon: "music",
        link: "https://soundcloud.com/xavierstampslafont",
        external: true
      },
      {
        label: "Comics",
        icon: "pencil",
        link: "https://howsyouroktea.wordpress.com/",
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

    if (!item.external) {
      return <Link to={item.link}>{content}</Link>;
    }

    return (
      <a href={item.link} target={"_blank"} rel={"noopener noreferrer"}>
        {content}
      </a>
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

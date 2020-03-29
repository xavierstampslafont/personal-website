import React from "react";
import "./style.scss";
import { Icon, SemanticICONS } from "semantic-ui-react";

export default class Menu extends React.Component {
  render() {
    const items: {
      label: string;
      icon: SemanticICONS;
      link: string;
      external?: boolean;
    }[] = [
      {
        label: "Home",
        icon: "home",
        link: "#home"
      },
      {
        label: "Bio",
        icon: "user",
        link: "#bio"
      },
      {
        label: "Work",
        icon: "code",
        link: "work"
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

    return (
      <div className="components-menu">
        {items.map(item => (
          <span key={item.label}>
            <a
              href={item.link}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
            >
              <Icon name={item.icon} />
              {item.label}
            </a>
          </span>
        ))}
      </div>
    );
  }
}

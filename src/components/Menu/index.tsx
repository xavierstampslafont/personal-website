import React from "react";
import "./style.scss";
import { Icon, SemanticICONS } from "semantic-ui-react";
import { Link } from "react-router-dom";

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

    return (
      <div className="components-menu">
        {items.map(item => {
          const content = (
            <React.Fragment>
              <Icon name={item.icon} />
              {item.label}
            </React.Fragment>
          );
          return (
            <span key={item.label}>
              {item.external && (
                <a
                  href={item.link}
                  target={"_blank"}
                  rel={"noopener noreferrer"}
                >
                  {content}
                </a>
              )}
              {!item.external && <Link to={item.link}>{content}</Link>}
            </span>
          );
        })}
      </div>
    );
  }
}

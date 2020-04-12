import React from "react";

interface LinkProps {
  to: string;
}

export default class Link extends React.Component<LinkProps> {
  render() {
    const { to, children } = this.props;
    return (
      <a href={to} target={"_blank"} rel={"noopener noreferrer"}>
        {children}
      </a>
    );
  }
}

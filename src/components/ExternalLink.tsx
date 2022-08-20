import React from "react";

export const ExternalLink = (props: {
  to: string;
  children: React.ReactNode;
}) => (
  <a href={props.to} target={"_blank"} rel={"noopener noreferrer"}>
    {props.children}
  </a>
);

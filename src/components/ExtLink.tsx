import React from "react";

export const ExtLink = (props: {
  to: string;
  children: React.ReactNode;
}): JSX.Element => (
  <a href={props.to} target={"_blank"} rel={"noopener noreferrer"}>
    {props.children}
  </a>
);

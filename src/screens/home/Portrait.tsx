import React from "react";
import styled from "styled-components";
import portrait from "../../assets/portrait.jpg";

export const Portrait = () => (
  <StyledPortrait
    src={portrait}
    alt="Xavier on a sunny day"
    width="400px"
    height="400px"
  />
);

const StyledPortrait = styled.img`
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);

  width: 80%;
  height: 80%;

  margin-bottom: 1em;

  @media only screen and (min-width: 25em) {
    width: 25em;
    height: 25em;

    margin-bottom: 0;

    @media (min-width: 768px) {
      position: fixed;
      top: calc(50vh - 40vw / 2);
      right: 60vw;
      width: 40vw;
      height: 40vw;

      // 1000px corresponds to 768px + 25em. No calc() in media queries!
      @media (min-width: 1000px) {
        top: calc(50vh - 25em / 2);
        width: 25em;
        height: 25em;
      }
    }
  }
`;

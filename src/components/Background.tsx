import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  background: radial-gradient(
    ellipse at center,
    rgb(249, 243, 239) 77%,
    rgb(255, 240, 215) 100%
  );
`;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Background } from "./components/Background";
import { Home } from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";

const AppStyle = styled.div`
  /* width: 65em;
  margin: auto; */
`;

const App = () => (
  <AppStyle>
    <GlobalStyle />
    <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </AppStyle>
);

export default App;

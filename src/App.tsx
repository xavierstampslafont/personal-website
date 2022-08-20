import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Background } from "./components";
import { HomeScreen } from "./screens";
import { GlobalStyle } from "./styles";

const App = () => (
  <>
    <GlobalStyle />
    <Background />
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;

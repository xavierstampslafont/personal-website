import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Background } from "./components/Background";
import { Home } from "./components/Home";
import { GlobalStyle } from "./GlobalStyle";

const App = () => (
  <>
    <GlobalStyle />
    <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </>
);

export default App;

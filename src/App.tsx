import React from "react";
import "./App.scss";
import { Home } from "./components/Home";
import { Background } from "./components/Background";
import { Navigate, Route, Routes } from "react-router-dom";

console.warn("TODO: Thesis real sizes for downloads");

const App = (): JSX.Element => (
  <div className="App">
    <Background />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </div>
);

export default App;

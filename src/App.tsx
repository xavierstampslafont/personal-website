import React from "react";
import "./App.scss";
import { Menu } from "./components/Menu";
import { Home } from "./components/Home";
import { Background } from "./components/Background";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Thesis } from "./components/Thesis";
import { Work } from "./components/Work";

console.warn("TODO: Thesis real sizes for downloads");

const App = (): JSX.Element => (
  <div className="App">
    <Background />
    <Menu />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/thesis" element={<Thesis />} />
    </Routes>
  </div>
);

export default App;

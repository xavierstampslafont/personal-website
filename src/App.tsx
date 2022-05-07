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
      <Route path="/about">
        <About />
      </Route>
      <Route path="/work">
        <Work />
      </Route>
      <Route path="/thesis">
        <Thesis />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  </div>
);

export default App;

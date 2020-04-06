import React from "react";
import "./App.scss";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Background from "./components/Background";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Background />
      <Menu />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/work">
          <Work />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import "./App.scss";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Background from "./components/Background";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Background />
      <Menu />
      <Switch>
        <Route path="/bio">
          <h1>Bio</h1>
        </Route>
        <Route path="/work">
          <h1>Work</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;

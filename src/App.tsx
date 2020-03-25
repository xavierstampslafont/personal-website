import React from "react";
import "./App.scss";
import Menu from "./components/Menu";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="app-background" />
      <Body />
      <Menu />
    </div>
  );
}

export default App;

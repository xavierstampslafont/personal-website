import React from "react";
import "./App.scss";
import Menu from "./components/Menu";
import Body from "./components/Body";
import Background from "./components/Background";

function App() {
  return (
    <div className="App">
      <Background />
      <Body />
      <Menu />
    </div>
  );
}

export default App;

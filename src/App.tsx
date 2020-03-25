import React from "react";
import "./App.scss";
import Header from "./components/Header";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <div className="app-background" />
      <Body />
      <Header />
    </div>
  );
}

export default App;

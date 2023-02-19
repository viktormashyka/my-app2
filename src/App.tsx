import React from "react";
import "./App.css";
import { HomePage } from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage greeting="Hello" username="Viktor">
        <p>I am your child</p>
      </HomePage>
    </div>
  );
}

export default App;

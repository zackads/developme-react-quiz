import React from "react";
import Multiplier from "./Multiplier.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>DevelopMe_ React Quiz</header>
      <main>
        <Multiplier x={5} y={7} />
      </main>
    </div>
  );
}

export default App;

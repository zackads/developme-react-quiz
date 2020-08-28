import React from "react";
import "./App.css";

import Multiplier from "./Multiplier.js";
import EvenClicks from "./EvenClicks.js";

function App() {
  return (
    <div className="App">
      <header>DevelopMe_ React Quiz</header>
      <main>
        <Multiplier x={5} y={7} />
        <EvenClicks />
      </main>
    </div>
  );
}

export default App;

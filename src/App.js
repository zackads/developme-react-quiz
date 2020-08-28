import React from "react";
import "./App.css";

import Multiplier from "./Multiplier.js";
import EvenClicks from "./EvenClicks.js";
import CountBy from "./CountBy.js";
import HideMe from "./HideMe.js";
import MinimumLength from "./MinimumLength.js";

function App() {
  return (
    <div className="App">
      <header>DevelopMe_ React Quiz</header>
      <main>
        <Multiplier x={5} y={7} />
        <EvenClicks />
        <CountBy step={5} />
        <HideMe>Flo is the best DevelopMe_ tutor ever!</HideMe>
        <MinimumLength length={30} />
      </main>
    </div>
  );
}

export default App;

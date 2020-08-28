import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Multiplier from "./Multiplier.js";
import EvenClicks from "./EvenClicks.js";
import CountBy from "./CountBy.js";
import HideMe from "./HideMe.js";
import MinimumLength from "./MinimumLength.js";

const App = () => (
  <Router>
    <>
      <header>DevelopMe_ React Quiz</header>
      <Route
        path="/multiplier/:x/:y"
        render={({ match }) => (
          <Multiplier x={match.params.x} y={match.params.y} />
        )}
      />
      <Route path="/even-clicks">
        <EvenClicks />
      </Route>
      <Route
        path="/count-by/:step"
        render={({ match }) => <CountBy step={match.params.step} />}
      ></Route>
      <Route path="/hide-me">
        <HideMe>Flo is the best DevelopMe_ tutor ever!</HideMe>
      </Route>
      <Route
        path="/minimum/:length"
        render={({ match }) => <MinimumLength length={match.params.length} />}
      ></Route>
    </>
  </Router>
);

export default App;

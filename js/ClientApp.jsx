import { HashRouter, Route } from "react-router-dom";

import Landing from "./landing";
import React from "react";
import { render } from "react-dom";

const App = () => (
  <HashRouter>
    <div className="app">
      <Route path="/" component={Landing} />
    </div>
  </HashRouter>
);
render(<App />, document.getElementById("app"));

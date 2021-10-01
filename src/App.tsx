import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "normalize.css";

import { Developers } from "./views/Developers";
import { Trending } from "./views/Trending";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/trending">
          <Trending />
        </Route>
        <Route path="/trending/developers">
          <Developers />
        </Route>
      </Switch>
    </Router>
  );
}

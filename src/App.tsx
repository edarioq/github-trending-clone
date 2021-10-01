import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import { Trending } from "./views/Trending";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/trending">
          <Trending />
        </Route>
        <Route path="*">
          <Redirect to="/trending" />
        </Route>
      </Switch>
    </Router>
  );
}

import { history } from "@zambezi/caballo-vivo";
import { Router, Route, Link, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import People from "./people/People";
import Ships from "./ships/Ships";

export default function toView(state) {
  if (state.get("error", false)) {
    return <div>encountered an error</div>;
  }
  if (state.get("loading", false)) {
    return <div>loading stuff</div>;
  }
  console.log("render");
  return (
    <Router history={history}>
      <nav>
        <ul>
        <li><Link to="/people">People</Link></li>
        <li><Link to="/ships">Ships</Link></li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/">
          Hi there
        </Route>
        <Route path="/people">
          <ErrorBoundary fallback={<div>Something bad happened to people {':('}</div>}>
            <People />
          </ErrorBoundary>
        </Route>
        <Route path="/ships">
          <ErrorBoundary fallback={<div>Something bad happened to ships {':('}</div>}>
            <Ships />
          </ErrorBoundary>
        </Route>
      </Switch>
    </Router>
  );
}

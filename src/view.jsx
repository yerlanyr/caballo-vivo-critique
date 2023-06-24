import { history } from "@zambezi/caballo-vivo";
import { Link, Route, Router, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { menuToggle$ } from "./intents";
import People from "./smart-components/People";
import Ships from "./smart-components/Ships";
import Todo from "./smart-components/Todo";

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
      <button onClick={menuToggle$.next.bind(menuToggle$)}>Toggle menu</button>
      {state.get("menuToggle", true) && (
        <nav>
          <ul>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/ships">Ships</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
          </ul>
        </nav>
      )}
      <Switch>
        <Route exact path="/">
          Hi there
        </Route>
        <Route path="/people">
          <ErrorBoundary
            fallback={<div>Something bad happened to people {":("}</div>}
          >
            <People />
          </ErrorBoundary>
        </Route>
        <Route path="/ships">
          <ErrorBoundary
            fallback={<div>Something bad happened to ships {":("}</div>}
          >
            <Ships />
          </ErrorBoundary>
        </Route>
        <Route path="/todo">
          <ErrorBoundary
            fallback={<div>Something bad happened to todos {":("}</div>}
          >
            <Todo />
          </ErrorBoundary>
        </Route>
      </Switch>
    </Router>
  );
}

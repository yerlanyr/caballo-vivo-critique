import { history } from "@zambezi/caballo-vivo";
import { Route, Router, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import People from "./smart-components/People";
import Ships from "./smart-components/Ships";
import Todo from "./smart-components/Todo";
import { Menu } from "./smart-components/Menu";

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
      <Menu />
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
        <Route path="/people-and-ships">
          <ErrorBoundary
            fallback={<div>Something bad happened to people {":("}</div>}
          >
            <People />
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


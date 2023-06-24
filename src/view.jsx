import { history } from "@zambezi/caballo-vivo";
import { Router, Route, Link, Switch } from "react-router-dom";
export default function toView(state) {
  if(state.get('error', false)) {
    return <div>encountered an error</div>
  }
  if(state.get('loading', false)) {
    return <div>loading stuff</div>
  }
  console.log('render')
  return (
    <div>
      <Router history={history}>
        <Switch>
          <Route path="/">Hi there</Route>
        </Switch>
      </Router>
    </div>
  );
}

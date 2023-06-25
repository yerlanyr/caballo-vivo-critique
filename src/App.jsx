import { Suspense } from "react";
import { QueryClient } from "react-query";
import { QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import { Menu } from "./smart-components/Menu";
import People from "./smart-components/People";
import PeopleAndShips from "./smart-components/PeopleAndShips";
import Ships from "./smart-components/Ships";
import Todo from "./smart-components/Todo";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <BrowserRouter>
          <Menu />
          <Switch>
            <Route exact path="/">
              Hi there
            </Route>
            <Route exact path="/people">
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
                fallback={<div>Something bad happened to people and ships {":("}</div>}
              >
                <PeopleAndShips />
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
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
};

import { createStore$ } from "@zambezi/caballo-vivo";
import { Map } from "immutable";
import { map, merge } from "rxjs";
import location$ from "./location/location";
import people$ from "./location/reducers/people";
import ships$ from './location/reducers/ships';
import todo$ from "./todo";
import todo2$ from './location/reducers/todo';
import toggleMenu$ from "./toggle-menu";

export const store = merge(
  location$.pipe(map(() => (state) => state)),
  people$,
  ships$,
  toggleMenu$,
  todo$,
  todo2$,
).pipe(createStore$(new Map()));

import { createStore$ } from "@zambezi/caballo-vivo";
import { Map } from "immutable";
import { map, merge } from "rxjs";
import location$ from "./location";
import people$ from "./people";
import ships$ from './ships';
import todo$ from "./todo";
import toggleMenu$ from "./toggle-menu";

export const store = merge(
  location$.pipe(map(() => (state) => state)),
  people$,
  ships$,
  toggleMenu$,
  todo$
).pipe(createStore$(new Map()));

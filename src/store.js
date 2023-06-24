import { createStore$ } from "@zambezi/caballo-vivo";
import { map, merge, of } from "rxjs";
import { Map } from "immutable";
import location$ from "./location";
import people$ from "./people";
import ships$ from './ships';

export const store = merge(
  location$.pipe(map(() => (state) => state)),
  people$,
  ships$
).pipe(createStore$(new Map()));

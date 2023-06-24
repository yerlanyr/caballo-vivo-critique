import { createStore$ } from "@zambezi/caballo-vivo";
import { Map } from "immutable";
import { map, merge } from "rxjs";
import location$ from "./location/location";
import todo$ from "./todo";
import locationReducer$ from './location/reducers'
import toggleMenu$ from "./toggle-menu";

export const store = merge(
  location$.pipe(map(() => (state) => state)),
  toggleMenu$,
  todo$,
  locationReducer$
).pipe(createStore$(new Map()));

import { createStore$ } from "@zambezi/caballo-vivo";
import { Map } from "immutable";
import { map, merge } from "rxjs";
import location$ from "./location/location";
import syncStateReducers$ from './sync-state/reducers'
import locationReducer$ from './location/reducers'

export const store = merge(
  location$.pipe(map(() => (state) => state)),
  locationReducer$,
  syncStateReducers$
).pipe(createStore$(new Map()));

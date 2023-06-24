import { createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { catchError, concat, map, of, switchMap, tap } from "rxjs";
import { displayShips$ } from "../intents/displayShips$";
import { fetchShipsPaginated$ } from "../services";
import { displayReducer$ } from "./displayReducer$";

export default displayReducer$({
  displayIntent$: displayShips$,
  fetchObservable$: () => fetchShipsPaginated$(1),
  keyOrPath: 'ships',
  href: '/ships'
});

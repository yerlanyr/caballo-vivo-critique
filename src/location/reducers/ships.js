import createAsyncReducer$ from "../../utils/createAsyncReducer$";
import { displayShips$ } from "../intents/displayShips$";
import { fetchShipsPaginated$ } from "../services";

export default createAsyncReducer$({
  intent$: displayShips$,
  service$: () => fetchShipsPaginated$(1),
  keyOrPath: 'ships',
  href: '/ships'
});

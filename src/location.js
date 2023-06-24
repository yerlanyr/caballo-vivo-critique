import { createLocation$ } from "@zambezi/caballo-vivo";
import { displayPeople$, displayShips$ } from "./intents";

export default createLocation$({
  '/people': displayPeople$.next.bind(displayPeople$),
  '/ships': displayShips$.next.bind(displayShips$)
});
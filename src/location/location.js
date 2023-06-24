import { createLocation$ } from "@zambezi/caballo-vivo";
import { displayPeople$, displayShips$, displayTodo$ } from "./intents";

export default createLocation$({
  '/people': displayPeople$.next.bind(displayPeople$),
  '/ships': displayShips$.next.bind(displayShips$),
  '/todo': displayTodo$.next.bind(displayTodo$)
});
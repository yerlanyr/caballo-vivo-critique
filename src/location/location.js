import { createLocation$ } from "@zambezi/caballo-vivo";
import { displayTodo$ } from "./intents/displayTodo$";
import { displayShips$ } from "./intents/displayShips$";
import { displayPeople$ } from "./intents/displayPeople$";

export default createLocation$({
  '/people': displayPeople$.next.bind(displayPeople$),
  '/ships': displayShips$.next.bind(displayShips$),
  '/todo': displayTodo$.next.bind(displayTodo$)
});
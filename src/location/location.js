import { createLocation$ } from "@zambezi/caballo-vivo";
import { displayTodo$ } from "./intents/displayTodo$";

export default createLocation$({
  '/todo': displayTodo$.next.bind(displayTodo$),
});
import { fetchTodos$ } from "../../services";
import { displayTodo$ } from "../intents/displayTodo$";
import { displayReducer$ } from "./displayReducer$";

export default displayReducer$({
  displayIntent$: displayTodo$,
  fetchObservable$: fetchTodos$,
  keyOrPath: 'todo',
  href: '/todo'
})

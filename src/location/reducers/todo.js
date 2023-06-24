import { fetchTodos$ } from "../services";
import { displayTodo$ } from "../intents/displayTodo$";
import createAsyncReducer$ from "../../utils/createAsyncReducer$";

export default createAsyncReducer$({
  intent$: displayTodo$,
  service$: fetchTodos$,
  keyOrPath: 'todo',
  href: '/todo'
})

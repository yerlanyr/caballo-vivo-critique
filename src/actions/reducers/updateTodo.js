import updateTodo from "actions/intents/updateTodo";
import updateTodoService from "actions/services/updateTodo";
import createAsyncReducer$ from "utils/createAsyncReducer$";

export default createAsyncReducer$({
  intent$: updateTodo,
  service$: updateTodoService,
  href: '/todos'
})
import { useStateContext } from "@zambezi/caballo-vivo";
import { setFilterTodo$, toggleTodo$ } from "../intents";
import { TodoView } from "../view-components/TodoView";

export default function Todo() {
  const state = useStateContext();
  const todos = state.get("todo", []);
  const filter = state.get("filter");

  return (
    <TodoView
      filter={filter}
      todos={todos}
      onFilterChange={setFilterTodo$.next.bind(setFilterTodo$)}
      onTodoClick={toggleTodo$.next.bind(toggleTodo$)}
    />
  );
}

import { useStateContext } from "@zambezi/caballo-vivo";
import { filterTodo } from "../atomics/filterTodo";
import { useSubscription } from "../utils/useSubscription";
import { toggleTodo$ } from "../sync-state/intents/toggleTodo$";
import { TodoView } from "../view-components/TodoView";

export default function Todo() {
  const state = useStateContext();
  const todos = state.get("todo", []);
  const filter = useSubscription(filterTodo);

  return (
    <TodoView
      filter={filter}
      todos={todos}
      onFilterChange={filterTodo.next.bind(filterTodo)}
      onTodoClick={toggleTodo$.next.bind(toggleTodo$)}
    />
  );
}

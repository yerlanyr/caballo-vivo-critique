import { useStateContext } from "@zambezi/caballo-vivo";
import { useDebugValue } from "react";
import { setFilterTodo$, toggleTodo$ } from "../intents";

export default function Todo() {
  const state = useStateContext();
  const todos = state.get("todo", []);
  const filter = state.get("filter");
  useDebugValue(filter)
  return (
    <div>
      <h1>Todos</h1>
      <p>
        <em>Filters:</em>
      </p>
      <ul>
        <li onClick={() => setFilterTodo$.next("all")}>All</li>
        <li onClick={() => setFilterTodo$.next("completed")}>Completed</li>
        <li onClick={() => setFilterTodo$.next("not-completed")}>
          Not completed
        </li>
      </ul>
      <ul>
        {todos.map((todo, i) => (
          <li
            key={i}
            onClick={() => toggleTodo$.next(i)}
            style={{
              textDecoration: todo.crossedOut ? "line-through" : "none",
              display:
                filter === "all" ||
                (filter === "completed" && todo.crossedOut) ||
                (filter === "not-completed" && !todo.crossedOut) ? 'block' : 'none',
            }}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

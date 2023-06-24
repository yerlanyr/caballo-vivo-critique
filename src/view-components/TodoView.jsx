export function TodoView({filter, onFilterChange, todos, onTodoClick}) {
  return (
    <div>
      <h1>Todos</h1>
      <p>
        <em>Filters:</em>
      </p>
      <ul>
        <li onClick={() => onFilterChange("all")}>All</li>
        <li onClick={() => onFilterChange("completed")}>Completed</li>
        <li onClick={() => onFilterChange("not-completed")}>
          Not completed
        </li>
      </ul> 
      <ul>
        {todos.map((todo, i) => (
          <li
            key={i}
            onClick={() => onTodoClick(i)}
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
  )
}
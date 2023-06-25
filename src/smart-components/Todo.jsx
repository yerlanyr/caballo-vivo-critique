import { useAtom } from "jotai";
import { useReducer } from "react";
import { useQuery } from "react-query";
import { todoFetcher } from "../api/todo";
import { checkedTodos as checkedTodosAtom } from "../atomics/checkedTodos";
import { filterTodo } from "../atomics/filterTodo";
import { TodoView } from "../view-components/TodoView";

export default function Todo() {
  const { data } = useQuery({
    queryKey: ["todo"],
    queryFn: todoFetcher,
    suspense: true,
  });
  const [checkedTodos] = useAtom(checkedTodosAtom);
  const todos = data.map((item, i) => ({
    ...item,
    crossedOut: checkedTodos.has(i),
  }));
  const [filter, setFilter] = useAtom(filterTodo);
  const [, forceRender] = useReducer((f) => !f, true);
  return (
    <TodoView
      filter={filter}
      todos={todos}
      onFilterChange={setFilter}
      onTodoClick={(id) => {
        if (!checkedTodos.has(id)) {
          checkedTodos.add(id);
        } else {
          checkedTodos.delete(id);
        }
        forceRender();
      }}
    />
  );
}

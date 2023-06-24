import { cook, stow } from "@zambezi/caballo-vivo";
import { map, merge, startWith } from "rxjs";
import { addTodo$, setFilterTodo$, toggleTodo$ } from "./intents";

export default merge(
  addTodo$.pipe(map((state) => state)),
  setFilterTodo$.pipe(startWith('all'), stow('filter')),
  toggleTodo$.pipe(
    cook((state, index) =>
      state.update("todo", (todos) =>
        todos.map((todoItem, idx) => {
          if (idx === index) {
            return { ...todoItem, crossedOut: !todoItem.crossedOut };
          }

          return todoItem;
        })
      )
    )
  )
)


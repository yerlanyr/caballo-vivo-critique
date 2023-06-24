import { addTodo$, displayTodo$, setFilterTodo$, toggleTodo$ } from "./intents";
import { catchError, concat, map, merge, of, startWith, switchMap } from "rxjs";
import { cook, createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { fetchTodos$ } from "./services";

export default merge(
  displayTodo$.pipe(
    switchMap(() =>
      concat(
        of(true).pipe(stow("loading")),
        fetchTodos$().pipe(
          stow("todo"),
          catchError((err) =>
            of(err).pipe(
              cook((state) => state.set("loading", false).set("error", err))
            )
          )
        ),
        of(false).pipe(stow("loading")),
        createNavigateTo$("/todo")
      )
    )
  ),
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


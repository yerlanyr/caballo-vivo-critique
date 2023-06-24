import { cook, createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { catchError, concat, of, switchMap } from "rxjs";
import { displayTodo$ } from "../intents/displayTodo$";
import { fetchTodos$ } from "../../services";

export default displayTodo$.pipe(
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
  )


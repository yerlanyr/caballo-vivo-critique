import { createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { catchError, concat, map, of, switchMap, tap } from "rxjs";
import { fetchPeoplePaginated$ } from "../../services";
import { displayPeople$ } from '../intents/displayPeople$'
export default displayPeople$.pipe(
  switchMap(() =>
    concat(
      of(true).pipe(stow("loading")),
      fetchPeoplePaginated$(1).pipe(
        tap((x) => console.log(x)),
        map((data) => (state) => state.set("people", data)),
        catchError((err) =>
          concat(of(err).pipe(stow("error")), of(false).pipe(stow("loading")))
        )
      ),
      of(false).pipe(stow("loading")),
      createNavigateTo$("/people")
    )
  )
);
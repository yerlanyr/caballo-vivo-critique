import { createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { catchError, concat, map, of, switchMap, tap } from "rxjs";
import { displayShips$ } from "./location/intents";
import { fetchShipsPaginated$ } from "./services";

export default displayShips$.pipe(
  switchMap(() =>
    concat(
      of(true).pipe(stow("loading")),
      fetchShipsPaginated$(1).pipe(
        tap((x) => console.log(x)),
        map((data) => (state) => state.set("ships", data)),
        catchError((err) =>
          concat(of(err).pipe(stow("error")), of(false).pipe(stow("loading")))
        )
      ),
      of(false).pipe(stow("loading")),
      createNavigateTo$("/ships")
    )
  )
);

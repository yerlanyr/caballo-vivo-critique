import { cook, createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { catchError, concat, of, switchMap } from "rxjs";

export const displayReducer$ = ({
  displayIntent$,
  fetchObservable$,
  keyOrPath,
  href,
}) =>
  displayIntent$.pipe(
    switchMap((intent) =>
      concat(
        of(true).pipe(stow("loading")),
        fetchObservable$(intent).pipe(
          stow(keyOrPath),
          catchError((err) =>
            of(err).pipe(
              cook((state, err) =>
                state.set("error", err).set("loading", false)
              )
            )
          )
        ),
        of(false).pipe(stow("loading")),
        createNavigateTo$(href)
      )
    )
  );

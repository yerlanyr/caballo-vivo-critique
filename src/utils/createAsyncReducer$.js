import { cook, createNavigateTo$, stow } from "@zambezi/caballo-vivo";
import { catchError, concat, of, switchMap } from "rxjs";

const catchErrorAsStowErrorWithCleanup = catchError((err) =>
  of(err).pipe(
    cook((state, err) => state.set("error", err).set("loading", false))
  )
);
export default ({ intent$, service$, keyOrPath = false, href }) =>
  intent$.pipe(
    switchMap((intent) =>
      concat(
        of(true).pipe(stow("loading")),
        keyOrPath
          ? service$(intent).pipe(
              stow(keyOrPath),
              catchErrorAsStowErrorWithCleanup
            )
          : service$(intent).pipe(catchErrorAsStowErrorWithCleanup),
        of(false).pipe(stow("loading")),
        createNavigateTo$(href)
      )
    )
  );

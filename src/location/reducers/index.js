import { merge } from "rxjs";
import people$ from "./people";
import ships$ from "./ships";
import todo$ from "./todo";

export default merge(
  people$,
  ships$,
  todo$
)
import { merge } from "rxjs";
import todo$ from "./todo";
import toggleMenu$ from "./toggle-menu";

export default merge(
  todo$,
  toggleMenu$
)
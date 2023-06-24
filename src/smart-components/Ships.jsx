import { useStateContext } from "@zambezi/caballo-vivo";
import ShipsView from "../view-components/ShipsList";

export default function Ships() {
  const state = useStateContext();

  return <ShipsView list={state.get("ships").results} />
}

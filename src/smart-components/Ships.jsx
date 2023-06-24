import { useStateContext } from "@zambezi/caballo-vivo";

export default function Ships() {
  const state = useStateContext();

  return <ShipsView list={state.get("ships").results} />
}

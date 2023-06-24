import { useStateContext } from "@zambezi/caballo-vivo";
import PeopleView from "../view-components/PeopleView";

export default function People() {
  return <PeopleView list={useStateContext().get("people").results} />
}

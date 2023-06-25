import { useStateContext } from "@zambezi/caballo-vivo";
import { useQuery } from "react-query";
import { shipsFetcher } from "../api/ships";
import ShipsView from "../view-components/ShipsList";

export default function Ships() {
  const {
    data: ships,
  } = useQuery({
    queryKey: ["ships"],
    queryFn: () => shipsFetcher(1),
    suspense: true,
  });

  return <ShipsView list={ships.results} />;
}

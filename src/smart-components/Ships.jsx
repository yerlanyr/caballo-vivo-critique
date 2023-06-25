import { useStateContext } from "@zambezi/caballo-vivo";
import { useQuery } from "react-query";
import { shipsFetcher } from "../api/ships";
import ShipsView from "../view-components/ShipsList";

export default function Ships() {
  const {
    isLoading,
    data: ships,
  } = useQuery({
    queryKey: ["ships"],
    queryFn: () => shipsFetcher(1),
  });
  if(isLoading) return <div>Loading ships...</div>
  return <ShipsView list={ships.results} />;
}

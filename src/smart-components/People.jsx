import { useStateContext } from "@zambezi/caballo-vivo";
import { peopleFetcher } from "../api/people";
import { useQuery } from "react-query";
import PeopleView from "../view-components/PeopleView";

export default function People() {
  const { isLoading, data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => peopleFetcher(1),
  })
  if(isLoading) return <div>Loading people...</div>
  return <PeopleView list={people.results} />
}

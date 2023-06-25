import { useStateContext } from "@zambezi/caballo-vivo";
import { peopleFetcher } from "../api/people";
import { useQuery } from "react-query";
import PeopleView from "../view-components/PeopleView";

export default function People() {
  const { data: people } = useQuery({
    queryKey: ['people'],
    queryFn: () => peopleFetcher(1),
    suspense: true
  })
  return <PeopleView list={people.results} />
}

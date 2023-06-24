import { fetchPeoplePaginated$ } from "../services";
import { displayPeople$ } from "../intents/displayPeople$";
import { displayReducer$ } from "./displayReducer$";

export default displayReducer$({
  displayIntent$: displayPeople$, 
  fetchObservable$: () => fetchPeoplePaginated$(1), 
  keyOrPath: "people", 
  href: "/people"
});

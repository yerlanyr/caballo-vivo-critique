import { fetchPeoplePaginated$ } from "../services";
import { displayPeople$ } from "../intents/displayPeople$";
import createAsyncReducer$ from "../../utils/createAsyncReducer$";

export default createAsyncReducer$({
  intent$: displayPeople$, 
  service$: () => fetchPeoplePaginated$(1), 
  keyOrPath: "people", 
  href: "/people"
});

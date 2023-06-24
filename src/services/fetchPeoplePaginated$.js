import { fetchByUrl$ } from './fetchByUrl$';


export const fetchPeoplePaginated$ = (page = 1) => fetchByUrl$(`https://swapi.dev/api/people/?page=${page}`);

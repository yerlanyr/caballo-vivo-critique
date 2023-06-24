import { fetchByUrl$ } from './fetchByUrl$';


export const fetchShipsPaginated$ = (page = 1) => fetchByUrl$(`https://swapi.dev/api/starships/?page=${page}`);

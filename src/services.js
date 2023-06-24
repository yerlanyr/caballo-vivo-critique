import { from } from 'rxjs'

export const fetchByUrl$ = (url) => from(fetch(url).then(res => res.json()))
export const fetchPeoplePaginated$ = (page = 1) => fetchByUrl$(`https://swapi.dev/api/people/?page=${page}`)
export const fetchShipsPaginated$ = (page = 1) => fetchByUrl$(`https://swapi.dev/api/starships/?page=${page}`)
export const fetchTodos$ = () => fetchByUrl$(`https://jsonplaceholder.typicode.com/todos`)
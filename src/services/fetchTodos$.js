import { fetchByUrl$ } from './fetchByUrl$';


export const fetchTodos$ = () => fetchByUrl$(`https://jsonplaceholder.typicode.com/todos`);

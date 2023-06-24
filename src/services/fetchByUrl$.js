import { from } from 'rxjs';

export const fetchByUrl$ = (url) => from(fetch(url).then(res => res.json()));

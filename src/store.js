import { createStore$ } from '@zambezi/caballo-vivo';
import { map, of } from 'rxjs';
import { Map } from 'immutable';
import location$ from './location'

export const store = location$.pipe(map(() => (state) => state)).pipe(createStore$(new Map()));

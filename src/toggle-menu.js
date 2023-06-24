import { menuToggle$ } from "./intents";
import { stow } from '@zambezi/caballo-vivo'
import { scan } from 'rxjs'

export default menuToggle$.pipe(scan(f => !f, true), stow('menuToggle'))
import { createRoot } from 'react-dom/client'
import { createStateContext } from '@zambezi/caballo-vivo'
import { map } from 'rxjs'
import toView from './view'
import { store } from './store'

const root = createRoot(document.getElementById('root'))
const render = root.render.bind(root)
const contextedToView = createStateContext(toView)

store.pipe(map(contextedToView)).subscribe(render)

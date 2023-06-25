import { createRoot } from 'react-dom/client'
import { createStateContext } from '@zambezi/caballo-vivo'
import toView from './view'
import { store } from './store'
import { useSubscription } from './utils/useSubscription'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { Suspense } from 'react'

const queryClient = new QueryClient()
const root = createRoot(document.getElementById('root'))
const render = root.render.bind(root)
const contextedToView = createStateContext(toView)

const App = () => {
  const state = useSubscription(store, new Map())
  return <QueryClientProvider client={queryClient}>
    <Suspense fallback={<div>Loading...</div>}>
    {contextedToView(state)}
    </Suspense>
  </QueryClientProvider>
}

render(<App/>)

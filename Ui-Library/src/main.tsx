import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import Loader from './components/loader/Loader.tsx'
const App = lazy(() => import('./App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<Loader/>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)

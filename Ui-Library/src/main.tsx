import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
const App = lazy(() => import('./App.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<h3>Loading...!</h3>}>
      <App />
    </Suspense>
  </React.StrictMode>,
)

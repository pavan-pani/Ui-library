import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './index.scss'
const App = lazy(() => import('./App.tsx'))
const Navbar = lazy(() => import('./components/NavBar/NavBar.tsx'))

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Suspense fallback={<h3>Loading...!</h3>}>
        <Navbar />
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
)

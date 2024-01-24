import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import './index.scss'
import Navbar from './components/NavBar/NavBar.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

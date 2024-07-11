import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Movies from './Pages/Movies'
import NotFound from './Pages/NotFound'
import Browse from './Pages/Browse'
import Dashboard from './Pages/Dashboard'
import "./index.css"
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/movies" element={ <Movies/> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="/browse" element={ <Browse/> } />
        <Route path="/*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)

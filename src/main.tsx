import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes, HashRouter, Navigate} from "react-router-dom";

function React() {
  return <h1>React Component</h1>
}

function Vite() {
  return <h1>Vite Component</h1>
}

function Test() {
  return (
    <h1>
      Test Component
      { <Navigate to='/react' />}
    </h1>
  )
}

function NotFound() {
  return(
    <h1>404 page is not found</h1>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/react' element={<React/>}></Route>
        <Route path='/vite' element={<Vite/>}></Route>
        <Route path='/test' element={ <Test/> }></Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)


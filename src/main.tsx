import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from "react-router-dom";

function React() {
  return <h1>React Component</h1>
}

function Vite() {
  return <h1>React Component</h1>
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}></Route>
        <Route path='/react' element={<React/>}></Route>
        <Route path='/vite' element={<Vite/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)


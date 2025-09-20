import {createBrowserRouter, Navigate} from "react-router-dom";
import App from "./App.tsx";

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

function Apple() {
  return(
    <h1>this is apple component 2</h1>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/react',
    element: <React/>
  },
  {
    path: '/vite',
    element: <Vite/>
  },
  {
    path: '/test',
    element: <Test/>
  },
  {
    path: '/apple',
    element: <Apple/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
  ]);

export default router

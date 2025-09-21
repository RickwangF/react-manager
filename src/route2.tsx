import {createBrowserRouter, Navigate, useParams, Outlet} from "react-router-dom";
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

function OrderDetail() {
  const params = useParams()
  return(
    <h1>this is order detail page orderId is { params.orderId } </h1>
  )
}

function Goods() {
  const params = useParams()
  return(
    <h1>
      this is goods page
      <Outlet />
    </h1>
  )
}

function GoodsList() {
  const params = useParams()
  return (
    <h2>
      Goods List Page, page is { params.page }
    </h2>
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
  },
  {
    path: '/order/:orderId',
    element: <OrderDetail/>
  },
  {
    path: '/goods',
    element: <Goods/>,
    children: [
      {
        path: 'list/:page',
        element: <GoodsList/>
      }
    ]
  }], {basename: '/app'});

export default router

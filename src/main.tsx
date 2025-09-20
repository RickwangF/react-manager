import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
//import BaseRouter from "./router1.tsx";
import Router2 from "./route2.tsx";

// <HashRouter>
//   <Routes>
//     <Route path='/' element={<App/>}></Route>
//     <Route path='/react' element={<React/>}></Route>
//     <Route path='/vite' element={<Vite/>}></Route>
//     <Route path='/test' element={ <Test/> }></Route>
//     <Route path='*' element={<NotFound/>}></Route>
//   </Routes>
// </HashRouter>

// <HashRouter>
//   <BaseRouter/>
// </HashRouter>

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={Router2}/>
  </StrictMode>
)


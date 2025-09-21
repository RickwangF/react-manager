import {createHashRouter } from "react-router-dom";
import NotFound from "@/views/NotFound";
import Welcome from "@/views/Welcome";

const router = createHashRouter([
  {
    path: '/',
    element: <Welcome/>
  },
  {
    path: '*',
    element: <NotFound/>
  }
])

export default router

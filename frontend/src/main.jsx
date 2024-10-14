import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Loading from "./pages/Loading.jsx"
import Dashboard from "./pages/Dashboard.jsx"
import Bakery from "./pages/Bakery.jsx"
import Login from "./pages/Login.jsx"
import Register from "./pages/Register.jsx"

const router = createBrowserRouter([
  {
    path:"/",
    element:<Loading/>
  },
  {
    path:"/home",
    element:<Dashboard/>
  },
  {
    path:"/bakery/:id",
    element:<Bakery/>
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/register",
    element:<Register/>
  }])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

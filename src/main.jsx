import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from './pages/MainLayout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import About from './pages/About';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "about",
        element: <About></About>
      },
    ]

  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

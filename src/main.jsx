import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Error from './components/Error'
import Home from './components/Home'
import Listadodeturno from './components/Listadodeturno';
import Turno from './components/Turno';
import Servicios from './components/Servicios';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home />,
    errorElement: <Error/>,
  },
  {
    path: "/turno",
    element: <Turno />,
  },
  {
    path: "/listadoturno",
    element: <Listadodeturno />,
  },
  {
    path: "/servicios",
    element: <Servicios />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
)

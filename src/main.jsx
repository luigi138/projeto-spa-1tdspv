import { createBrowserRouter, RouberProvider, Navigate } from 'react-router-dom'
import Home from './components/Home.jsx';
import Produtos from './components/Produtos.jsx';
import EditarProduto from './components/EditarProduto.jsx';
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error/>,
    children:[
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/produtos",
        element: <Produtos/>
      },
      {
        path: "/produtos/editar/:id",
        element: <EditarProduto/>
      },
      {
        path: "/antiga",
        element: <Navigate to="/"/>
      }
    ]
  }
])
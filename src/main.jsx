import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouberProvider } from 'react-router-dom'
import Home from './components/Home.jsx';
import Produtos from './components/Produtos.jsx';
import EditarProduto from './components/EditarProduto.jsx';
import Error from './components/Error.jsx'

const router = createBrowserRouter([
  {path:"/" , element:<App/>, errorElement: <Error/>, children:[
    {path: "/" , element:<Home/>},
    {path: "/produtos" , element: <Produtos/>},
    {path: "/produtos/editar/:id" , element: <EditarProduto/>}

  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

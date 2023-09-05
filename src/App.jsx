
export default function App() {
 
 //Area decrarativa
 
  return (
    <>
    {/* Area imperativa! */}
    <div>
     <h1>Vite + React</h1>
     <h2>Conseguimos!</h2>
     <p>Ola Mundo!</p>
    </div>

    </>
  )
}
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/Menu'
import Rodape from './components/Rodape'

function App() {

  return (
    <>
    <Menu/>
    <Outlet/>
    <Rodape/>
    </>
  )
}

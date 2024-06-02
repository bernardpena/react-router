import './App.css'
import Nav from './components/Nav'
import HomePage from './components/HomePage'
import Contacto from './components/Contacto'
import { Route, Routes } from "react-router-dom"

function App() {

  return (

    <>
      <Nav />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Contacto' element={<Contacto />} />
        <Route path='*' element={<h1>No se Encontró la Pagina</h1>} />
      </Routes>
    </>
  )
}

export default App

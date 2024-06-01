import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'

function App() {
  const [persona, setPersona] = useState(false)
  return (

    <>
      {<Nav />}
    </>
  )
}

export default App

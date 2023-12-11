import { useState } from 'react'
import './App.css'
import ProgramBuilder from './features/exercises/ProgramBuilder'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ProgramBuilder />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import ProgramBuilder from './features/exercises/ProgramBuilder'
import NavBar from'./features/NavBar'

function App() {

  return (
    <> 
      <NavBar />
      <ProgramBuilder />
    </>
  )
}

export default App

import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './views/LogIn/LogIn'
import './App.css'
import Notes from './views/Notes/Notes'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </Router>
  )
}

export default App

import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './views/LogIn/LogIn'
import Notes from './views/Notes/Notes'
import { AuthContextProvider, AuthContext } from './context/AuthContextProvider'
import { ProtectedRoute } from './router/ProtectedRoute'

function App() {
  const privateRoutes = () => {
    return (
      <Route path="/notes" element={<ProtectedRoute component={Notes} />} />
    )
  }

  return (
    <Router>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<LogIn />} />
          {privateRoutes()}
        </Routes>
      </AuthContextProvider>
    </Router>
  )
}

export default App

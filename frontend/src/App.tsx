import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './views/LogIn/LogIn'
import Notes from './views/Notes/Notes'
import { ProtectedRoute } from './router/ProtectedRoute'
import LayOut from './components/Layouts/LayOut'
import FullNote from './components/FullNote/FullNote'
import { Snackbars } from './components/SnackBars/SnackBars'

function App() {
  const privateRoutes = () => {
    return (
      <Route path="/*" element={<ProtectedRoute component={LayOut} />}>
        <Route path="notes" element={<Notes />} />
        <Route path="title" element={<FullNote />} />
        <Route path="new_note" element={<FullNote isNewNote={true} />} />
      </Route>
    )
  }

  return (
    <>
      <Snackbars />
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          {privateRoutes()}
        </Routes>
      </Router>
    </>
  )
}

export default App

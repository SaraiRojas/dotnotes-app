import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LogIn from './views/LogIn/LogIn'
import Notes from './views/Notes/Notes'
import { AuthContextProvider } from './context/AuthContextProvider'
import { ProtectedRoute } from './router/ProtectedRoute'
import LayOut from './components/Layouts/LayOut'
import FullNote from './components/FullNote/FullNote'
import { NoteInfoContextProvider } from './context/NoteInfoContextProvider'

function App() {
  const privateRoutes = () => {
    return (
      <Route path="/*" element={<ProtectedRoute component={LayOut} />}>
        <Route path="notes" element={<Notes />} />
        <Route path="title" element={<FullNote />} />
        <Route path="new_note" element={<FullNote isNewNote={true}/>} />
      </Route>
    )
  }

  return (
    <Router>
      <AuthContextProvider>
        <NoteInfoContextProvider>
          <Routes>
            <Route path="/" element={<LogIn />} />
            {privateRoutes()}
          </Routes>
        </NoteInfoContextProvider>
      </AuthContextProvider>
    </Router>
  )
}

export default App

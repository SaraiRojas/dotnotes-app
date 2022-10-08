import React, { useContext, useState, useEffect } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { getNotes } from '../../api/Notes'
import PrevNode from '../../components/PrevNote/PrevNote'

const Notes = () => {
  const { isAuthenticated, user } = useContext(AuthContext)
  console.log(isAuthenticated, user)

  const [notes, setNotes] = useState<any>(null)

  useEffect(() => {
    getNotes().then((data) => {
      setNotes(data)
    })
  }, [])

  return (
    <main>{notes && notes.map((note: any) => <PrevNode note={note} />)}</main>
  )
}

export default Notes

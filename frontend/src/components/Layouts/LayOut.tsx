import React, { useContext } from 'react'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import Header from '../../components/header/header'
import { Outlet } from 'react-router-dom'

const LayOut = () => {
  return (
    <main className="LayOut">
      <Header />
      <Outlet />
    </main>
  )
}

export default LayOut

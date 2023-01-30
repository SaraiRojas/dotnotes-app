import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import { INote, Iuser } from '../model/interface'
import { Icontext } from './interface'

export const AuthContext = React.createContext({} as Icontext)

export const AuthContextProvider = ({
  children,
}: {
  children: JSX.Element
}) => {
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } =
    useAuth0()

  const logIn = () => loginWithRedirect()

  const logOut = () => logout()

  const [noteInfo, setNoteInfo] = useState<INote[]>([])

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logIn,
        logOut,
        user,
        isLoading,
        noteInfo,
        setNoteInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

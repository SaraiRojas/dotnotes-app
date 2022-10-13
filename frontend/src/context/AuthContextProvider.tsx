import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
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

  // user -> post -> http://localhost:3000/users/
  // axios.post('http://localhost:3000/users/', {
  //   user: user
  // })

  const logOut = () => logout()

  const [noteInfo, setNoteInfo] = useState(null)

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

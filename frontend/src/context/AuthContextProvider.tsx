import { useAuth0 } from '@auth0/auth0-react'
import React, { useContext } from 'react'
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

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        logIn,
        logOut,
        user,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthContext = () => useContext(AuthContext)

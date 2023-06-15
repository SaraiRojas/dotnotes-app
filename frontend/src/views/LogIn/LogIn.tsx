import React from 'react'
import '../../scss/index.scss'
import SignInButton from '../../components/SigInButton/SigInButton'
import { useAuth0 } from '@auth0/auth0-react'

const LogIn = () => {
  const { loginWithRedirect } = useAuth0()
  return (
    <main>
      <h1>
        DotNotes<span className="logIn_appname_dot">.</span>
      </h1>
      <img src="/ImgsignInImg.png" alt="girl taking notes"></img>
      <h2>Start taking notes</h2>
      <SignInButton />
      <p>
        Don't have an account yet?{' '}
        <a className={'logIn__registation'} onClick={() => loginWithRedirect()}>
          Register
        </a>
      </p>
    </main>
  )
}

export default LogIn

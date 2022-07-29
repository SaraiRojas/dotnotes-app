import React from 'react'
import './_LogIn.scss'
import SignInButton from '../../components/SigInButton/SigInButton'

const LogIn = () => {
  return (
    <main>
      <h1>
        DotNotes<span>.</span>
      </h1>
      <img src="/ImgsignInImg.png" alt="girl taking notes" width="100%"></img>
      <h2>Start taking notes</h2>
      <SignInButton width="80%" />
      <p>
        Don't have an account yet? <a>Register</a>
      </p>
    </main>
  )
}

export default LogIn

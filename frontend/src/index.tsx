import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'
import LogIn from './views/LogIn/LogIn'
import { Auth0Provider } from "@auth0/auth0-react"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      redirectUri={window.location.origin}
    >
      <LogIn />
    </Auth0Provider>
  </React.StrictMode>
)

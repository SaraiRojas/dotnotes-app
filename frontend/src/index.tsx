import React from 'react'
import ReactDOM from 'react-dom/client'
import './scss/index.scss'
import { Auth0Provider } from '@auth0/auth0-react'
import App from './App'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, HttpLink } from '@apollo/client'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost:4000/'
  }),
  cache: new InMemoryCache(),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Auth0Provider
        domain={import.meta.env.VITE_AUTH0_DOMAIN}
        clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
        redirectUri={`${window.location.origin}/notes`}
      >
        <App />
      </Auth0Provider>
    </ApolloProvider>
  </React.StrictMode>
)

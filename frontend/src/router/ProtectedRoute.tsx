import { withAuthenticationRequired } from '@auth0/auth0-react'
import React from 'react'
import { PageLoader } from '../components/Layouts/pageLoager'
import { ProtectedRouteProps } from './Interface'

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  component,
}) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="page-layout">
        <PageLoader />
      </div>
    ),
  })

  return <Component />
}

import '../../scss/index.scss'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import MenuDrawer from '../MenuDrawer/MenuDrawer'
import { useState } from 'react'
import { menuItems } from './utils'
import { useAuth0 } from '@auth0/auth0-react'

const LayOut = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { logout } = useAuth0()

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setIsOpen(open)
    }

  return (
    <main className="LayOut">
      <MenuDrawer
        anchor="right"
        menuItems={menuItems(logout)}
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
      />
      <Header toggleDrawer={toggleDrawer} />
      <Outlet />
    </main>
  )
}

export default LayOut

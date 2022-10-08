import '../../scss/index.scss'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'
import MenuDrawer from '../MenuDrawer/MenuDrawer'
import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContextProvider'
import { menuItems } from './utils'

const LayOut = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const { logOut } = useContext(AuthContext)

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
        menuItems={menuItems(logOut)}
        toggleDrawer={toggleDrawer}
        isOpen={isOpen}
      />
      <Header toggleDrawer={toggleDrawer} />
      <Outlet />
    </main>
  )
}

export default LayOut

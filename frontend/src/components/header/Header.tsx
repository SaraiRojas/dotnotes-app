import React from 'react'
import Avatar from '@mui/material/Avatar'
import '../../scss/index.scss'
import { IHeader } from './interface'
import { useAuth0 } from '@auth0/auth0-react'

const Header = ({ toggleDrawer }: IHeader) => {
  const { user } = useAuth0()

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: 'black',
      },
      children: `${name.split('')[0]}`,
    }
  }

  return (
    <header className="Header">
      <h1 className="Header_appname">
        DotNotes<span className="Header_appname_dot">.</span>
      </h1>
      <div className="Header_avatar" onClick={toggleDrawer(true)}>
        <Avatar {...stringAvatar(user?.nickname || 'No Name')} />
      </div>
    </header>
  )
}

export default Header

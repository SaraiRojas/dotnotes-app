import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { IHeader } from './interface'

const Header = ({ toggleDrawer }: IHeader) => {
  const { user } = useContext(AuthContext)

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
        <Avatar {...stringAvatar(user.nickname)} />
      </div>
    </header>
  )
}

export default Header

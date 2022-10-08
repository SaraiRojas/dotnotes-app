import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar'
import '../../scss/index.scss'
import { AuthContext } from '../../context/AuthContextProvider'
import { IHeader } from './interface'

const Header = ({ toggleDrawer }: IHeader) => {
  const { user } = useContext(AuthContext)

  function stringToColor(string: string) {
    let hash = 0
    let i

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash)
    }

    let color = '#'

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }
    /* eslint-enable no-bitwise */

    return color
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
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

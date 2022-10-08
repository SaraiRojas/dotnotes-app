import LogoutIcon from '@mui/icons-material/Logout'
import { ImenuItems } from '../MenuDrawer/interface'

export const menuItems = (logOut: Function): ImenuItems[] => [
  {
    text: 'Sign Out',
    Icon: LogoutIcon,
    onClick: () => logOut({ returnTo: window.location.origin }),
  },
]

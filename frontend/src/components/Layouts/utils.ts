import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { ImenuItems } from '../MenuDrawer/interface'

export const menuItems = (logOut: Function): ImenuItems[] => [
  {
    text: 'Sign Out',
    Icon: ArrowBackIcon,
    onClick: () => logOut({ returnTo: window.location.origin }),
  },
]

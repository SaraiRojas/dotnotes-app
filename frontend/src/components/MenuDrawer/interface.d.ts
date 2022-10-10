import { SvgIconComponent } from '@mui/icons-material'

export type Anchor = 'top' | 'left' | 'bottom' | 'right'

export interface ImenuItems {
  text: string
  Icon: SvgIconComponent
  onClick: Function
}

export interface IMenuDrawer {
  anchor: Anchor
  menuItems: ImenuItems[]
  toggleDrawer: Function
  isOpen: boolean
}

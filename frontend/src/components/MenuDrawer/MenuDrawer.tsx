import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { Anchor, IMenuDrawer, ImenuItems } from './interface'
import '../../scss/index.scss'

const MenuDrawer = ({
  anchor,
  menuItems,
  toggleDrawer,
  isOpen,
}: IMenuDrawer) => {
  const list = (anchor: Anchor, menuItems: ImenuItems[]) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 300 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, Icon, onClick }) => (
          <ListItem key={`${text}-id`} disablePadding>
            <ListItemButton onClick={() => onClick()}>
              <ListItemIcon>
                <Icon className="menuDrawer_icon" />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={toggleDrawer(false)}
      className={'Drawer'}
    >
      {list(anchor, menuItems)}
    </Drawer>
  )
}

export default MenuDrawer

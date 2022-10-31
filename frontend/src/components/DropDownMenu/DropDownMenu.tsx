import { SvgIconComponent } from '@mui/icons-material'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import '../../scss/index.scss'
import { IMenuActions } from './interfaces'

const DropDownMenu = ({
  Name,
  actions,
}: {
  Name: string | SvgIconComponent
  actions: IMenuActions[]
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="DropDownMenu">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="DropDownMenu_button"
      >
        {typeof Name === 'string' ? (
          Name
        ) : (
          <Name className="DropDownMenu_icon" />
        )}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {actions.map(({ label, action }) => (
          <MenuItem
            key={`id-${label}`}
            onClick={() => {
              action(), handleClose()
            }}
          >
            {label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

export default DropDownMenu

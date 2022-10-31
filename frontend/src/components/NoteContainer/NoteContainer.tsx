import { Card, CardContent } from '@mui/material'
import '../../scss/index.scss'

interface INoteContainer {
  children: any
  cardHeight: string
  cardWidth?: string
}

const NoteContainer = ({
  children,
  cardHeight,
  cardWidth = 'auto',
}: INoteContainer) => {
  return (
    <Card
      className={'Card'}
      variant="outlined"
      sx={{ height: cardHeight, width: cardWidth }}
    >
      <CardContent sx={{ height: '100%' }}>{children}</CardContent>
    </Card>
  )
}

export default NoteContainer

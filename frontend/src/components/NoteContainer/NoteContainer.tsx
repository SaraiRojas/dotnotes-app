import { Card, CardActionArea, CardContent } from '@mui/material'
import { Link } from 'react-router-dom'
import '../../scss/index.scss'


const NoteContainer = ({ children }: any) => {

  return (
    <Card className={'Card'} variant="outlined">
      <CardActionArea component={Link} to="/notes/title">
        <CardContent>
          {children}
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default NoteContainer
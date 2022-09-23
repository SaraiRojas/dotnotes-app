import { Card, CardContent } from '@mui/material'
import '../../scss/index.scss'


const NoteContainer = ({ children }: any) => {

  return (
    <Card className={'Card'} variant="outlined">
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}

export default NoteContainer
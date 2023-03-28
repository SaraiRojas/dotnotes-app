import '../../scss/index.scss'
import { Skeleton, Stack } from '@mui/material'

const LoadingNotes = () => {
  const windowHeight = window.innerHeight
  const NotesNumber: number = Math.floor((windowHeight * 0.9) / 130)
  const notesSkeletons = new Array(NotesNumber).fill(null)

  return (
    <Stack spacing={1.5} className="notes-container__loading">
      {notesSkeletons.map((_, i) => (
        <Skeleton variant="rounded" width={'100%'} height={125} key={i} />
      ))}
    </Stack>
  )
}

export default LoadingNotes

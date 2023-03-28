import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'
import '../../scss/index.scss'

export const PageLoader: React.FC = () => {
  return (
    <div className="loader">
      <CircularProgress color="inherit" size={80} />
    </div>
  )
}

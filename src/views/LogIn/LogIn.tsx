import * as React from 'react'
import Button from '@mui/material/Button';
import styles from "./LogIn.module.css"

const LogIn = () => {
  return (
    <main>
      <h1>DotNotes<span>.</span></h1>
      <p className={styles.subtitle}>Start taking notes</p>
      <Button
        variant="outlined"
        style={{ borderRadius: '14px', borderWidth: '3px', color: '#000000', borderColor: '#000000' }}
      >
        Continue with Google
      </Button>
    </main>
  )
}

export default LogIn
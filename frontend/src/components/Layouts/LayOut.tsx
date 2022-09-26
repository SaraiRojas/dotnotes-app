import '../../scss/index.scss'
import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

const LayOut = () => {
  return (
    <main className="LayOut">
      <Header />
      <Outlet />
    </main>
  )
}

export default LayOut

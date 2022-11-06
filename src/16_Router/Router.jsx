import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Router = () => {
  return (
    <div>
        <h1>Router</h1>

        <h3>Demo Link</h3>
        {/* <Link to="/" className='me-2'>Home</Link>
        <Link to="/msi" className='me-2'>MSI</Link>
        <Link to="/baucua" className='me-2'>BauCua</Link> */}

        <Link to="/router/movie" className='me-2'>Movie</Link>
        <Link to="/router/contact" className='me-2'>Contact</Link>

        {/* Outlet: nơi các children route */}
        <Outlet />
    </div>
  )
}

export default Router
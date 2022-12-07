import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'

const NavigationBar = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>RKE</div>
      <nav className='item'>
        <ul className='ul'></ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/eventadd'>Event Form</Link>
        </li>
        <li>
          <Link to='/eventlist'>Event List</Link>
        </li>
      </nav>
    </div>
  )
}

export default NavigationBar

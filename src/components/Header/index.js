import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <header className='Header-wrapper'>
    <Link to='/'>
      Home
    </Link>
    <Link to='/about'>
      Sobre
    </Link>
  </header>
)

export default Header
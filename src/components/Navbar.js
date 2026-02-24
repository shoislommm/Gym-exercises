import React from 'react'
import { Link } from 'react-router-dom'
import { Stack } from '@mui/material'
import Logo from '../assets/images/Logo.png'
import { useState } from 'react'

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('/')

  return (
    <Stack direction="row" sx={{
      backgroundColor: 'grey',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'sticky',
      width: '100%',
      top: '0'
    }}>
      <Link to="/" className='navbar-logo'>
        <img src={Logo} alt="logo" style={{ width: '48px', height: '48px', margin: '0px 20px' }}
          onClick={() => setActiveLink('/')} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: activeLink === '/' ? '3px solid #FF2625' : 'none'
        }}
          onClick={() => setActiveLink('/')}>
          Home
        </Link>
        <a href="#exercises" style={{
          textDecoration: 'none',
          color: '#3A1212',
          borderBottom: activeLink === '#exercises' ? '3px solid #FF2625' : 'none'
        }}
          onClick={() => setActiveLink('#exercises')}>
          Exercises
        </a>
      </Stack>
    </Stack>
  )
}

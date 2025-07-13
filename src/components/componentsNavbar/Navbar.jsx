import { Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './navbar.css'

export const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <div style={{ background: 'transparent', padding: '16px 0', width: isMobile ? '100%' : '100vw', position:"fixed", zIndex:1000}}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack direction="row" alignItems="center" justifyContent="space-between" style={{
          width: isMobile ? '90%' : '95vw',
          background: '#fff',
          borderRadius: '32px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          padding: isMobile ? '8px 16px' : '8px 32px',
          minHeight: isMobile ? '20px' : '60px',
        }}>
            <Stack style={{width:"40%"}}>
            <img src="/images/logosmall.png" alt="logo" style={{ width: isMobile ? '30%' : '8%', height: 'auto', marginRight: '32px' }} />
            </Stack>
          
          <Stack direction="row" spacing={isMobile ? 1.5 : 4} alignItems="center" >
            <Typography variant="h6" className='nav-text active'>Inicio</Typography>
            <Typography variant="h6" className='nav-text'>Servicios</Typography>
            <Typography variant="h6" className='nav-text'>Productos</Typography>
            <Typography variant="h6" className='nav-text'>Capacitaciones</Typography>
            <Typography variant="h6" className='nav-text'>Contacto</Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

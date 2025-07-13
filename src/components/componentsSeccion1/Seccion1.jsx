import { Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './seccion1.css'

export const Seccion1 = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
    <Stack justifyContent="center" alignItems="center" style={{height: isMobile ? "40vh" : "60vh",width:"100vw",backgroundColor:"#e9ecd9", borderRadius: isMobile ? "0px 0px 18% 18%" : "0px 0px 25% 25%", paddingTop: isMobile ? "8vh" : "10vh"}} className="seccion1-container">
      {/* Imagen hoja esquina inferior izquierda */}
      <img src="/images/hoja1.png" alt="hoja izquierda" className="hoja-esquina-izq" />
      {/* Imagen hoja esquina superior derecha */}
      <img src="/images/hoja2.png" alt="hoja derecha" className="hoja-esquina-der" />

      <img src="/images/logo.png" alt="logo" className='logo' />

      <Typography variant="h2" className='subtitle'>Un espacio de bienestar</Typography>
    </Stack>
  )
}

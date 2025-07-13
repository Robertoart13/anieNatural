import { Stack, useMediaQuery } from '@mui/material'
import React from 'react'

export const Seccion4 = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
  <Stack justifyContent="center" alignItems="center" style={{height: isMobile ? "30vh" : "60vh",width:"100vw",backgroundImage:"url('/images/seccion4.jpg')", backgroundSize:"cover", backgroundPosition:"center", borderRadius: isMobile ? "18% 18% 0px 0px" : "25% 25% 0px 0px"}}>
<img src="/images/abeja.png" alt="abeja" className='abeja' style={{width: isMobile ? "30%" : "25%"}}/>
  </Stack>
  )
}

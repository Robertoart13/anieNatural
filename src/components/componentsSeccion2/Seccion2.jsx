import { Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './seccion2.css'

export const Seccion2 = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
  return (
   <Stack direction="row" justifyContent="center" spacing={isMobile ? 2 : 25} alignItems="center" style={{paddingTop: isMobile ? "15%" : "10%", paddingBottom:"5%", paddingLeft: isMobile ? "10%" : "0%", paddingRight: isMobile ? "10%" : "0%"}}>
    <Stack style={{width : isMobile ? "55%" : "30%"}}>
        <Typography variant="h2" className='title2'>
        Donde la Belleza y el Bienestar se Conectan
        </Typography>

        <Typography variant="h6" className='subtitle2'>
        En Anie Natural, creemos en una belleza
auténtica y equilibrada que comienza desde
adentro. Nuestros productos están
elaborados con ingredientes naturales
cuidadosamente seleccionados para nutrir
y fortalecer la conexión entre alma, mente y
cuerpo. A través de la innovación constante
y la investigación científica, ofrecemos una
experiencia única que promueve el
autocuidado holístico y el <strong>amor propio</strong>.
        </Typography>
    </Stack>

    <img src="/images/seccion2.png" alt="seccion2" className='seccion2-img' />
   </Stack>
  )
}

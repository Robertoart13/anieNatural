import { Stack, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './seccion3.css'
import { NavLink } from 'react-router-dom'
export const Seccion3 = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');
const servicios = [

    {
        id: 1,
        title: "Cosmética Natural",
        description: "La belleza auténtica comienza con productos que respetan y nutren tu cuerpo y tu espíritu",
        image: "/images/cosmetica.png",
        url: "/productos/cosmetica-natural",
        type: "dark",
        color: "#e9ecd9",
        flecha: "/images/flecha2.png"
    },
    {
        id: 2,
        title: "Servicios",
        description: "Ofrecemos una variedad de servicios diseñados para promover tu bienestar integral, combinando la belleza exterior con el equilibrio interiorl",
        image: "/images/seccion3.png",
        url: "/servicios",
        type: "light",
        color: "#eaa692",
        flecha: "/images/flecha.png"
    },
    {
        id: 3,
        title: "Capacitaciones",
        description: "Empodérate con nuestro programa de capacitaciones en bienestar",
        image: "/images/capacitaciones.png",
        url: "/capacitaciones",
        type: "dark",
        color: "#bec88a",
        flecha: "/images/flecha2.png"
    }
]

  return (
<Stack direction="row" justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 10} style={{padding: isMobile ? "5vh 2vw" : "10vh 0vw"}}>

{servicios.map((servicio) => (
    <Stack key={servicio.id} justifyContent="center" alignItems="center" className={`card`} spacing={isMobile ? 2 : 5} style={{backgroundColor: servicio.color}}>
        <img src={servicio.image} alt={servicio.title} className='card-image' style={{width: servicio.id === 1 ? "90%" : servicio.id === 2 ? "80%" : "70%"}}/>
        <Stack style={{padding:"5%"}}>
            <Typography variant="h2" className={`card-title ${servicio.type}`}>{servicio.title}</Typography>
            <Typography variant="h6" className={`card-description ${servicio.type}`}>{servicio.description}</Typography>
            <NavLink to={servicio.url} className='flecha-link' style={{textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={servicio.flecha} alt="flecha" className='flecha' style={{width: isMobile ? "20%" : "10%", marginTop:"10%"}}/>
        </NavLink>
        </Stack>

       
    </Stack>
))}


</Stack>
  )
}

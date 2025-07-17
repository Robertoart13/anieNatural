import { Stack, Typography, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../componentsNavbar/Navbar';
import './servicios.css';

const ServiciosPage = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productos = [

        {
            id: 1,
            title: "Terapias Holísticas",
            description: "Equilibra tu cuerpo y mente con nuestras terapias holísticas personalizadas, diseñadas para aliviar el estrés, mejorar el bienestar emocional y encontrar un equilibrio espiritual.",
            url: "/servicios/terapias-holisticas",
            type: "dark",
            color: "#ffff",
            flecha: "/images/flecha2.png"
        },
        {
            id: 2,
            title: "Meditaciones",
            description: "Conéctate contigo misma y encuentra paz interior a través de nuestras meditaciones guiadas, adecuadas para todos los niveles y enfocadas en promover una mente tranquila y equilibrada.",
            url: "/servicios/meditaciones",
            type: "light",
            color: "#bec88a",
            flecha: "/images/flecha.png"
        },
        {
            id: 3,
            title: "Rituales (Ceremonias)",
            description: "Participa en nuestros rituales transformadores que te ayudan a liberar tensiones, establecer intenciones positivas y fomentar la sanación y el crecimiento personal.",
            url: "/servicios/rituales",
            type: "light",
            color: "#687658",
            flecha: "/images/flecha2.png"
        }
    ]
  return (
    <Stack>
      <Navbar/>
      <Stack justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 3} style={{height: isMobile ? "40vh" : "70vh",width:"100vw",backgroundColor:"#eaa692", borderRadius: isMobile ? "0px 0px 18% 18%" : "0px 0px 25% 25%", paddingTop: isMobile ? "20vh" : "10vh", paddingBottom: isMobile ? "6vh" : "0vh"}} className="seccion1-container">
      {/* Imagen hoja esquina inferior izquierda */}
      <img src="/images/hoja1.png" alt="hoja izquierda" className="hoja-esquina-izq" />
      {/* Imagen hoja esquina superior derecha */}
      <img src="/images/hoja2.png" alt="hoja derecha" className="hoja-esquina-der" />

      <img src="/images/servicios.png" alt="logo" className='logo' />

      <Typography variant="h2" className='subtitle'>Servicios</Typography>

      <Typography variant="h2" className='text-center'>
      Explora nuestra selección de productos cuidadosamente elaborados
con ingredientes naturales y orgánicos. Cada uno de nuestros productos
está formulado para ofrecerte lo mejor de la naturaleza, ayudándote a
realzar tu belleza natural y promover un bienestar integral.

      </Typography>


    </Stack>



    <Stack direction="row" justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 10} style={{padding: isMobile ? "5vh 2vw" : "10vh 0vw"}}>

{productos.map((producto) => (
    <Stack key={producto.id} justifyContent="center" alignItems="center" className={`card-productos`} spacing={isMobile ? 2 : 5} style={{backgroundColor: producto.color, border: producto.id === 1 ? "2px solid #bec88a" : "none"}}>
        <Stack style={{padding:"5%"}}>
            <Typography variant="h2" className={`card-title-productos ${producto.type}`}>{producto.title}</Typography>
            <Typography variant="h6" className={`card-description ${producto.type}`}>{producto.description}</Typography>
            <NavLink to={producto.url} className='flecha-link' style={{textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={producto.flecha} alt="flecha" className='flecha' style={{width: isMobile ? "20%" : "10%", marginTop:"10%"}}/>
        </NavLink>
        </Stack>

       
    </Stack>
))}


</Stack>

    </Stack>
  )
}



export default ServiciosPage

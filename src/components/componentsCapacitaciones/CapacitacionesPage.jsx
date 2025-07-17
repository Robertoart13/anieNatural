import { Stack, Typography, useMediaQuery } from '@mui/material'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from '../componentsNavbar/Navbar';
import './capacitaciones.css';

const CapacitacionesPage = () => {

    const isMobile = useMediaQuery('(max-width: 600px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productos = [

        {
            id: 1,
            title: "Terapias Holísticas",
            description: "Equilibra tu cuerpo y mente con nuestras terapias holísticas personalizadas, diseñadas para aliviar el estrés, mejorar el bienestar emocional y encontrar un equilibrio espiritual.",
            url: "",
            type: "light",
            color: "#bec88a",
            flecha: "/images/flecha2.png"
        },
        {
            id: 2,
            title: "Meditaciones",
            description: "Conéctate contigo misma y encuentra paz interior a través de nuestras meditaciones guiadas, adecuadas para todos los niveles y enfocadas en promover una mente tranquila y equilibrada.",
            url: "",
            type: "light",
            color: "#eaa692",
            flecha: "/images/flecha.png"
        },
      
    ]
  return (
    <Stack>
      <Navbar/>
      <Stack justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 3} style={{height: isMobile ? "33vh" : "70vh",width:"100vw",backgroundColor:"#687658", borderRadius: isMobile ? "0px 0px 18% 18%" : "0px 0px 25% 25%", paddingTop: isMobile ? "10vh" : "10vh", paddingBottom: isMobile ? "6vh" : "0vh"}} className="seccion1-container">
      {/* Imagen hoja esquina inferior izquierda */}
      {/* Imagen hoja esquina superior derecha */}
      <img src="/images/hoja2.png" alt="hoja derecha" className="hoja-esquina-der" />
      <Stack direction={"row"} style={{marginTop: isMobile ? "10vh" : "0vh"}}>
      <img src="/images/capacitaciones.png" alt="logo" className='capacitaciones' style={{marginTop: isMobile ? "5vh" : "0vh"}}/>

      <Stack justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 3} style={{ width: "40%"}}>
      <Typography variant="h2" className='subtitle-capacitaciones'>Capacitaciones</Typography>

<Typography variant="h2" className='text-center-capacitaciones'>
Anie Natural ofrece programas de capacitación
diseñados para aquellas mujeres que desean
profundizar en el conocimiento de si mismas. Nuestros
cursos abarcan desde el uso de ingredientes naturales
hasta técnicas avanzadas de bienestar emocional,
proporcionando herramientas valiosas para el
autocuidado y el empoderamiento personal.
<br/>
<br/>
Inscríbete en nuestras capacitaciones y adquiere
conocimientos esenciales para tu bienestar.

</Typography>
      </Stack>


      </Stack>

      


    </Stack>



    <Stack direction="row" justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 10} style={{padding: isMobile ? "5vh 2vw" : "10vh 0vw"}}>

{productos.map((producto) => (
    <Stack key={producto.id} justifyContent="center" alignItems="center" className={`card-productos`} spacing={isMobile ? 2 : 5} style={{backgroundColor: producto.color}}>
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

export default CapacitacionesPage

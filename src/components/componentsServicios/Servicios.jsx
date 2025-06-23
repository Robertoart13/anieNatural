import { Stack, Typography, useMediaQuery } from '@mui/material'
// import "./servicios.css"
import Redes from '../componentsHome/Redes'

const Servicios = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
    <Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: '5%' }} spacing={8}>
    <Stack alignItems="center" justifyContent="center" spacing={2} style={{backgroundImage: "url('/images/textura3.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: isMobile ? "30vh" : "45vh"}}>
    <Typography className="title-home">
    Servicios
    </Typography>
   

   

    </Stack>

   

    <Stack spacing={4} alignItems="center" justifyContent="center">
        <Typography className="text-content">
        En Anie Natural, ofrecemos una variedad de servicios diseñados para promover tu bienestar integral, combinando la belleza exterior con el equilibrio interior.
        </Typography>

        <Stack alignItems="center" justifyContent="center" spacing={2} >
            <Typography className="little-title-content">
            Nuestros servicios están enfocados en proporcionar experiencias que nutran tu alma, mente y cuerpo. En nuestra sección de Servicios, encontrarás:
            </Typography>
            <ul style={{width: "70%"}}>
            <li><Typography className="text-content-servicios">
            <strong>Terapias Holísticas:</strong> Equilibra tu cuerpo y mente con nuestras terapias holísticas personalizadas, diseñadas para aliviar el estrés, mejorar el bienestar emocional y encontrar un equilibrio espiritual.
            </Typography></li>
            <li><Typography className="text-content-servicios">
            <strong>Meditaciones:</strong> Conéctate contigo misma y encuentra paz interior a través de nuestras meditaciones guiadas, adecuadas para todos los niveles y enfocadas en promover una mente tranquila y equilibrada.
            </Typography></li>
            <li><Typography className="text-content-servicios">
            <strong>Rituales (Ceremonias):</strong> Participa en nuestros rituales transformadores que te ayudan a liberar tensiones, establecer intenciones positivas y fomentar la sanación y el crecimiento personal.
            </Typography></li>
         
            </ul>
            <Typography className="text-content">
            Descubre cómo nuestros servicios pueden ayudarte a alcanzar un estado de bienestar integral.
        </Typography>
        </Stack>

        <Typography className="text-content-center">
        ¡Agenda tu sesión hoy mismo y empieza a transformar tu vida en Anie Natural!
        </Typography>

    <Typography className="copyright">
    <strong>www.anienatural.com</strong> todos los derechos reservados 2025
    </Typography>

  
    </Stack>

    <Redes/>

</Stack>
  )
}

export default Servicios

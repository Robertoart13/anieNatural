import { Stack, Typography, useMediaQuery } from '@mui/material'
// import "./servicios.css"
import Redes from '../componentsHome/Redes'

const Capacitaciones = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
    <Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: '5%' }} spacing={8}>
    <Stack alignItems="center" justifyContent="center" spacing={2} style={{backgroundImage: "url('/images/textura1.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: isMobile ? "30vh" : "45vh"}}>
    <Typography className="title-home">
    Capacitaciones
    </Typography>
   

   

    </Stack>

   

    <Stack spacing={4} alignItems="center" justifyContent="center">
        <Typography className="text-content">
        Empodérate con nuestro programa de capacitaciones en bienestar.
        </Typography>

        <Typography className="text-content">
        Anie Natural ofrece programas de capacitación diseñados para aquellas mujeres que desean profundizar en el conocimiento de si mismas. Nuestros cursos abarcan desde el uso de ingredientes naturales hasta técnicas avanzadas de bienestar emocional, proporcionando herramientas valiosas para el autocuidado y el empoderamiento personal.
        </Typography>

        <Typography className="text-content">
        Inscríbete en nuestras capacitaciones y adquiere conocimientos esenciales para tu bienestar. ¡Regístrate hoy y comienza tu viaje de aprendizaje!
        </Typography>

       

    <Typography className="copyright">
    <strong>www.anienatural.com</strong> todos los derechos reservados 2025
    </Typography>

  
    </Stack>

    <Redes/>

</Stack>
  )
}

export default Capacitaciones

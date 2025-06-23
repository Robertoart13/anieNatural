import { Stack, Typography, useMediaQuery } from '@mui/material'
// import "./servicios.css"
import Redes from '../componentsHome/Redes'

const Productos = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
    <Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: '5%' }} spacing={8}>
    <Stack alignItems="center" justifyContent="center" spacing={2} style={{backgroundImage: "url('/images/textura1.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: isMobile ? "30vh" : "45vh"}}>
    <Typography className="title-home">
    Productos
    </Typography>
   

   

    </Stack>

   

    <Stack spacing={4} alignItems="center" justifyContent="center">
        <Typography className="text-content">
        En Anie Natural, creemos que la belleza auténtica comienza con productos que respetan y nutren tu cuerpo y tu espíritu. Nuestra línea de productos de cosmética natural y emocional está diseñada para cuidar tu piel y equilibrar tus emociones con ingredientes puros y efectivos.
        </Typography>

        <Stack alignItems="center" justifyContent="center" spacing={2} >
            <Typography className="text-content">
            Explora nuestra selección de productos cuidadosamente elaborados con ingredientes naturales y orgánicos. Cada uno de nuestros productos está formulado para ofrecerte lo mejor de la naturaleza, ayudándote a realzar tu belleza natural y promover un bienestar integral. En nuestra sección de Productos encontrarás:
            </Typography>
            <ul style={{width: "70%"}}>
            <li><Typography className="text-content-servicios">
            <strong>Cosmética Natural:</strong> Descubre nuestros tratamientos faciales y corporales, diseñados para embellecer tu piel con ingredientes naturales y orgánicos.
            </Typography></li>
            <li><Typography className="text-content-servicios">
            <strong>Flores de Bach:</strong> Equilibra tus emociones con nuestras mezclas personalizadas de Flores de Bach, flores de Australia, Flores de California y desde luego flores de Costa Rica, ideales para enfrentar los desafíos emocionales diarios.
            </Typography></li>
            <li><Typography className="text-content-servicios">
            <strong>Aceites Esenciales:</strong> Revitaliza tus sentidos con nuestros aceites esenciales puros, perfectos para aromaterapia y cuidado personal. Además, explora nuestras Mezclas exclusivas de aceites esenciales, formuladas para potenciar tus rituales de autocuidado y armonizar tu espacio.
            </Typography></li>
         
            </ul>
            <Typography className="text-content">
            Explora nuestra línea completa de productos y descubre cómo Anie Natural puede transformar tu rutina de belleza y bienestar.
        </Typography>
        </Stack>

        <Typography className="text-content-center">
        ¡Compra ahora y comienza tu viaje hacia una belleza auténtica y equilibrada!
        </Typography>

    <Typography className="copyright">
    <strong>www.anienatural.com</strong> todos los derechos reservados 2025
    </Typography>

  
    </Stack>

    <Redes/>

</Stack>
  )
}

export default Productos

import { Stack, Typography, useMediaQuery } from '@mui/material'
// import "./servicios.css"
import Redes from '../componentsHome/Redes'

const Contacto = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
    <Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: '5%' }} spacing={8}>
    <Stack alignItems="center" justifyContent="center" spacing={2} style={{backgroundImage: "url('/images/textura3.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: isMobile ? "30vh" : "45vh"}}>
    <Typography className="title-home">
    Contacto
    </Typography>
   

   

    </Stack>

   

    <Stack spacing={4} alignItems="center" justifyContent="center">
        <Typography className="title-content">
        Estamos aquí para ayudarte en tu viaje hacia el bienestar integral
        </Typography>

        <Stack alignItems="center" justifyContent="center" spacing={2} >
            <Typography className="text-content">
            Si tienes alguna pregunta o deseas más información sobre nuestros productos y servicios, no dudes en contactarnos. Estamos disponibles en nuestras redes sociales o a través de nuestro formulario de contacto en el sitio web.
            </Typography>
           

            <Typography className="text-content">
            ¡Ponte en contacto con nosotros hoy y déjanos ayudarte a encontrar el camino hacia una belleza y bienestar auténticos!
            </Typography>
           
            <Typography className="text-content">
            En Anie Natural, estamos dedicados a liderar la industria de la cosmética natural y emocional, redefiniendo cómo las personas experimentan y cuidan su belleza y bienestar. Más allá de lo superficial, nos esforzamos por ofrecer una experiencia única y significativa, guiando a nuestros clientes hacia una auténtica conexión alma-mente-cuerpo.
        </Typography>

        <Typography className="text-content">
        Nuestros objetivos incluyen desarrollar una amplia gama de productos de cosmética natural, promover el autocuidado holístico y educar de manera transparente sobre nuestros ingredientes y prácticas sostenibles. Colaboramos con emprendedores y expertos en terapias naturales para enriquecer nuestra oferta y apoyar comunidades de bienestar.
        </Typography>

        <Typography className="text-content">
        Descubre más sobre nuestra visión en www.anienatural.com y síguenos en @anienatural en redes sociales para unirte a nuestra comunidad de belleza consciente.
        </Typography>
        </Stack>

    

    <Typography className="copyright">
    <strong>www.anienatural.com</strong> todos los derechos reservados 2025
    </Typography>

  
    </Stack>

    <Redes/>

</Stack>
  )
}

export default Contacto

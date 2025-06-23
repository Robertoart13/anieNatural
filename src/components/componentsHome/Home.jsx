import { Stack, Typography } from "@mui/material"
import "./home.css"
import Redes from "./Redes"
import Carrusel from "./Carrusel"
import { useMediaQuery } from "@mui/material"
const Home = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
<Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: '5%' }} spacing={8}>
    <Stack alignItems="center" justifyContent="center" spacing={isMobile || isTablet ? 1 : 2} style={{backgroundImage: "url('/images/textura1.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "45vh"}}>
    <Typography className="title-home">
    Anie Natural:
    </Typography>
    <Typography className="title-home">    
    Un espacio de bienestar
    </Typography>

    <a href="#" target="_blank" rel="noopener noreferrer" className="btn-bigWa">
        Iniciar conversacion en WhatsApp
    </a>

    </Stack>

    <Redes/>
    <Carrusel/>

    <Stack spacing={4} alignItems="center" justifyContent="center">
        <Typography className="title-content">
        Bienvenidos a Anie Natural: Donde la Belleza y el Bienestar se Conectan
        </Typography>

        <Stack alignItems="center" justifyContent="center" spacing={2}>
            <Typography className="text-content">
            Anie Natural: tu destino para la cosmética natural y emocional que transforma tu relación con la belleza y el bienestar, te transformarás desde tu interior.
            </Typography>
            <Typography className="text-content">
            En Anie Natural, creemos en una belleza auténtica y equilibrada que comienza desde adentro. Nuestros productos están elaborados con ingredientes naturales cuidadosamente seleccionados para nutrir y fortalecer la conexión entre alma, mente y cuerpo. A través de la innovación constante y la investigación científica, ofrecemos una experiencia única que promueve el autocuidado holístico y el amor propio.
            </Typography>
            <Typography className="text-content">
            En Anie Natural, estamos transformando la forma en que las personas perciben y practican el cuidado personal. Nos dedicamos a la cosmética natural y emocional, ofreciendo productos que no solo embellecen, sino que también te nutren desde adentro hacia afuera.
            </Typography>
            <Typography className="text-content">
            Nuestra misión es inspirar y empoderar a través de una conexión profunda entre la belleza exterior y el equilibrio interior. Con ingredientes naturales cuidadosamente seleccionados y un compromiso firme con la sostenibilidad, creamos una experiencia de autocuidado holístico que promueve la confianza y el bienestar emocional.
            </Typography>
            <Typography className="text-content">
            Explora nuestra gama de productos en www.anienatural.com y únete a nuestra comunidad en @anienatural para descubrir cómo podemos transformar juntos tu rutina de cuidado personal.
            </Typography>
        </Stack>

        <a href="#" target="_blank" rel="noopener noreferrer" className="btn-bigWaPink">
        ¡Explora nuestras ofertas y comienza tu viaje hacia una belleza auténtica hoy mismo!
    </a>

    <Typography className="copyright">
    <strong>www.anienatural.com</strong> todos los derechos reservados 2025
    </Typography>

  
    </Stack>

    <Redes/>

</Stack>
  )
}

export default Home

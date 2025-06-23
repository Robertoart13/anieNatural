import { Stack, Typography, useMediaQuery } from "@mui/material";
import Redes from "../componentsHome/Redes";

const CapacitacionesPage = ({ capacitacion }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
    <Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: "5%" }} spacing={8}>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        style={{
          backgroundImage: "url('/images/textura1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: isMobile ? "30vh" : "45vh",
        }}
      >
        <Typography className="title-home">{capacitacion.nombre}</Typography>
      </Stack>

      <Stack spacing={4} alignItems="center" justifyContent="center">
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          {capacitacion.id === 1 && (
            <>
              <Typography className="title-content">
              Participa en nuestros talleres presenciales y vive una experiencia de aprendizaje inmersiva
              </Typography>

              <Typography className="text-content">
              En Anie Natural, te invitamos a vivir una experiencia transformadora a través de nuestros talleres presenciales. Diseñados para mujeres que buscan profundizar en su bienestar emocional, físico y espiritual, nuestros talleres te ofrecen la oportunidad de aprender, crecer y conectar en un entorno acogedor y de apoyo.
              </Typography>

              <Typography className="text-content">
              Nuestros talleres presenciales te ofrecen la oportunidad de aprender de manera práctica y directa sobre nosotras mismas con temas asociados a la abundancia, relación con nuestros padres, la niña interior, la divina femenina y el divino masculino. Interactúa con nuestros expertos, comparte experiencias con otras participantes y lleva tus conocimientos al siguiente nivel.
              </Typography>

              <Typography className="text-content">
              Nuestros talleres presenciales son experiencias inmersivas que combinan teoría y práctica para proporcionarte herramientas valiosas que puedes aplicar en tu vida diaria. Guiados por expertas en bienestar, cada taller está diseñado para abordar diferentes aspectos del autocuidado holístico, desde la cosmética natural hasta técnicas de sanación emocional.
              </Typography>

            
              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Talleres de Cosmética Natural:</strong> Aprende a crear tus propios productos de belleza utilizando ingredientes naturales y orgánicos. Descubre recetas y técnicas para elaborar cremas, lociones, aceites y más, personalizados para tu tipo de piel y necesidades específicas.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Talleres de Terapia Floral:</strong> Sumérgete en el mundo de las esencias florales y aprende a utilizarlas para equilibrar tus emociones. Estos talleres te enseñarán cómo identificar las esencias adecuadas para ti y cómo integrarlas en tu rutina diaria para un bienestar emocional óptimo.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Talleres de Aromaterapia:</strong> Explora los beneficios de los aceites esenciales y aprende a utilizarlos para mejorar tu bienestar físico y emocional. Descubre cómo crear mezclas personalizadas, utilizar difusores y aplicar técnicas de masaje con aceites esenciales para una experiencia de sanación completa.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Talleres holísticos:</strong> Abordamos temas como la sanación de la niña interior, sanación de linaje femenino y masculino, sanación de relaciones interpersonales, abordamos temas como la abundación y la manifestación.
                  </Typography>
                </li>
              </ul>
              <Typography className="text-content">
              Explora nuestra gama completa de productos de cosmética natural y encuentra el cuidado perfecto para tu piel y cabello. Descubre cómo la naturaleza puede transformar tu rutina de belleza. ¡Compra ahora y comienza tu viaje hacia una belleza auténtica y natural con Anie Natural!
              </Typography>

              <Typography className="text-content" >
              Únete a nuestros talleres presenciales y comienza tu viaje hacia un bienestar integral y holístico. Reserva tu lugar hoy mismo y descubre cómo nuestras expertas pueden guiarte en el camino hacia una vida más equilibrada y plena
              </Typography>
           
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bigWaPink"
              >
                ¡Inscríbete ahora y vive la experiencia Anie Natural!
              </a>

            </>
          )}
          {capacitacion.id === 2 && (
            <>
              <Typography className="title-content">
              Aprende desde la comodidad de tu hogar con nuestros cursos en línea
              </Typography>

              <Typography className="text-content">
              Nuestros cursos en línea están diseñados para brindarte conocimientos profundos y prácticos sobre cosmética natural y bienestar emocional. Cada curso incluye materiales detallados, videos instructivos y acceso a expertos para responder tus preguntas.
              </Typography>

              <Typography className="text-content">
              En Anie Natural, sabemos que tu bienestar es una prioridad, y queremos ofrecerte la flexibilidad de aprender y crecer desde la comodidad de tu hogar. Nuestros cursos en línea están diseñados para mujeres que buscan mejorar su bienestar emocional, físico y espiritual a su propio ritmo, sin importar dónde se encuentren.
              </Typography>

              <Typography className="text-content">
              Nuestros cursos en línea te brindan acceso a contenido exclusivo y de alta calidad, desarrollado por expertas en diversas áreas del bienestar holístico. Cada curso está estructurado para proporcionarte conocimientos prácticos y herramientas que puedes integrar fácilmente en tu vida diaria.
              </Typography>

             
              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Curso de Cosmética Natural:</strong> Aprende a crear tus propios productos de belleza con ingredientes naturales. Este curso te guiará paso a paso a través de recetas y técnicas para elaborar cremas, lociones, aceites y más, adaptados a tus necesidades específicas.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Curso de Terapia Floral:</strong> Descubre el poder de las esencias florales para equilibrar tus emociones. Aprende a identificar las esencias adecuadas para ti y cómo integrarlas en tu rutina diaria para mejorar tu bienestar emocional.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Curso de Aromaterapia:</strong> Explora los beneficios de los aceites esenciales y cómo utilizarlos para mejorar tu salud y bienestar. Este curso te enseñará a crear mezclas personalizadas, usar difusores y aplicar técnicas de masaje con aceites esenciales.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Curso de Meditación y Mindfulness:</strong> Aprende técnicas de meditación y mindfulness que te ayudarán a reducir el estrés, mejorar tu concentración y encontrar una mayor paz interior. Este curso te proporcionará prácticas diarias y consejos para incorporar la meditación en tu vida cotidiana.
                  </Typography>
                </li>
           
              </ul>
              <Typography className="text-content">
              Transforma tu vida desde la comodidad de tu hogar con nuestros cursos en línea. Inscríbete hoy y accede a contenido exclusivo que te ayudará a mejorar tu bienestar integral. ¡Explora nuestros cursos ahora y comienza tu viaje hacia una vida más equilibrada y plena con Anie Natural!
              </Typography>

           
            </>
          )}
         

          <Typography className="copyright">
            <strong>www.anienatural.com</strong> todos los derechos reservados
            2025
          </Typography>
        </Stack>

        <Redes />
      </Stack>
    </Stack>
  );
};

export default CapacitacionesPage;

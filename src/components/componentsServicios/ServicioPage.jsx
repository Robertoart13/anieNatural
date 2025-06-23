import { Stack, Typography, useMediaQuery } from "@mui/material";
import Redes from "../componentsHome/Redes";

const ServicioPage = ({ servicio }) => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  return (
    <Stack sx={{ marginTop: isMobile ? '32%' : (isTablet ? '22%' : '8%'), paddingBottom: "5%" }} spacing={8}>
      <Stack
        alignItems="center"
        justifyContent="center"
        spacing={2}
        style={{
          backgroundImage: "url('/images/textura3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: isMobile ? "30vh" : "45vh",
        }}
      >
        <Typography className="title-home">{servicio.nombre}</Typography>
      </Stack>

      <Stack spacing={4} alignItems="center" justifyContent="center">
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          {servicio.id === 1 && (
            <>
              <Typography className="title-content">
                Sumérgete en un viaje de sanación integral con nuestras terapias
                holísticas
              </Typography>

              <Typography className="text-content">
                Nuestras terapias holísticas están diseñadas para equilibrar tu
                cuerpo y mente a través de técnicas de sanación energética y
                tratamientos personalizados. Ya sea que busques aliviar el
                estrés, mejorar tu bienestar emocional o encontrar un equilibrio
                espiritual, nuestras terapias te ofrecen un enfoque integral
                para tu salud y bienestar.
              </Typography>

              <Typography className="text-content">
                Agenda tu sesión de terapia holística hoy y comienza a
                experimentar los beneficios de un equilibrio integral.
              </Typography>

              <Typography className="text-content">
                Encuentra un espacio de sanación y autoconocimiento con nuestras
                terapias individuales en Anie Natural. Diseñadas para atender
                tus necesidades específicas, nuestras sesiones personalizadas te
                guiarán hacia un equilibrio emocional y mental, ayudándote a
                enfrentar los desafíos de la vida con mayor claridad y
                serenidad.
              </Typography>

              <Typography className="text-content">
                Nuestras terapias individuales están enfocadas en brindarte un
                apoyo integral para mejorar tu bienestar emocional y mental. A
                través de un enfoque holístico, combinamos diversas técnicas
                terapéuticas, como la sanación energética, la aromaterapia y el
                uso de Flores de Bach, para ofrecerte una experiencia completa y
                transformadora. En cada sesión, trabajarás junto a nuestras
                terapeutas expertas para identificar y liberar bloqueos
                emocionales, desarrollar estrategias de afrontamiento y fomentar
                una conexión más profunda contigo misma.
              </Typography>
              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Sanación Energética:</strong> Equilibra tus energías
                    y desbloquea tu potencial interior.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Aromaterapia:</strong> Utiliza aceites esenciales
                    para promover la relajación y el bienestar emocional.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Flores de Bach:</strong> Personaliza tus
                    tratamientos emocionales con esencias florales diseñadas
                    para armonizar tus emociones. Usamos flores de Bach, de
                    Australia, de California y desde luego de Costa Rica.
                  </Typography>
                </li>
              </ul>
              <Typography className="text-content">
                Agenda tu sesión de terapia individual hoy y comienza tu camino
                hacia un bienestar integral. Descubre el poder de la sanación
                holística y encuentra el equilibrio emocional que necesitas para
                vivir una vida plena y satisfactoria.
              </Typography>

              <Typography className="title-content">
                ¡Contáctanos para más información y reserva tu cita ahora!
              </Typography>
            </>
          )}
          {servicio.id === 2 && (
            <>
              <Typography className="title-content">
                Encuentra la paz interior con nuestras meditaciones guiadas
              </Typography>

              <Typography className="text-content">
                Nuestras sesiones de meditación te ayudarán a conectar
                profundamente contigo misma y encontrar un estado de serenidad y
                enfoque. Diseñadas para todos los niveles, nuestras meditaciones
                promueven una mente tranquila y equilibrada, esencial para el
                bienestar emocional y mental.
              </Typography>

              <Typography className="text-content">
                En Anie Natural, te invitamos a encontrar la paz y el equilibrio
                interior a través de nuestras meditaciones guiadas. Nuestras
                meditaciones guiadas están creadas para brindarte un espacio
                seguro y tranquilo donde puedas desconectar del mundo exterior y
                enfocarte en tu bienestar emocional y mental. Guiadas por
                expertas en meditación, cada sesión está estructurada para
                ayudarte a:
              </Typography>
              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Reducir el Estrés:</strong> Aprende técnicas de
                    respiración y visualización que calman la mente y liberan
                    tensiones acumuladas.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Mejorar la Concentración:</strong> Desarrolla una
                    mayor claridad mental y capacidad de enfoque en tu vida
                    diaria.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Fomentar la Autoexploración:</strong> Conéctate con
                    tus emociones y pensamientos más profundos, promoviendo el
                    autoconocimiento y la autoaceptación.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Promover la Relajación:</strong> Sumérgete en un
                    estado de relajación profunda que revitaliza tu cuerpo y
                    mente.
                  </Typography>
                </li>
              </ul>
              <Typography className="text-content">
                Nuestras meditaciones están diseñadas para todos los niveles.
                Utilizamos una combinación de técnicas tradicionales y modernas
                para ofrecerte una experiencia enriquecedora y transformadora.
              </Typography>

              <Typography className="text-content">
                Únete a nuestras sesiones de meditaciones guiadas y descubre los
                beneficios de una mente tranquila y equilibrada. Inscríbete hoy
                mismo y comienza tu viaje hacia un bienestar emocional y mental
                completo.
              </Typography>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bigWaPink"
              >
                ¡Reserva tu lugar ahora y experimenta la serenidad que mereces!
              </a>
            </>
          )}
          {servicio.id === 3 && (
            <>
              <Typography className="title-content">
                Honra tu conexión interior con nuestras ceremonias
                transformadoras.
              </Typography>

              <Typography className="text-content">
                Nuestras ceremonias están diseñadas para ayudarte a liberar
                tensiones, establecer intenciones positivas y encontrar
                equilibrio emocional. Cada ceremonia es una experiencia única
                que te conecta con tu ser interior y fomenta la sanación y el
                crecimiento personal.
              </Typography>

              <Typography className="text-content">
                Participa en nuestras ceremonias y descubre una nueva forma de
                conectarte contigo misma.
              </Typography>

              <Typography className="text-content">
                En Anie Natural, te invitamos a participar en nuestros rituales
                transformadores, diseñados para conectar profundamente con tu
                ser interior y promover la sanación emocional y espiritual.
                Nuestras ceremonias son experiencias únicas que te ayudarán a
                encontrar equilibrio y armonía en tu vida.
              </Typography>

              <Typography className="text-content">
                Nuestros rituales están cuidadosamente diseñados para ayudarte a
                liberar tensiones, establecer intenciones positivas y fomentar
                una profunda conexión contigo misma y con el universo. Guiados
                por facilitadoras expertas, cada ritual es una experiencia
                sagrada que combina prácticas ancestrales y técnicas modernas
                para crear un espacio de sanación y crecimiento personal.
              </Typography>

              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Rituales de Liberación:</strong>Deja ir lo que ya no
                    te sirve y abre espacio para nuevas energías positivas en tu
                    vida. Estos rituales te ayudarán a soltar emociones,
                    patrones y bloqueos que impiden tu bienestar.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Rituales de Intención:</strong>Establece tus metas y
                    deseos con claridad y propósito. Utilizamos herramientas
                    como la meditación, la visualización y la escritura para
                    ayudarte a manifestar tus sueños y aspiraciones.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Rituales de Conexión:</strong>Profundiza tu relación
                    contigo misma y con la naturaleza. Estos rituales incluyen
                    actividades como el uso de cristales, aceites esenciales y
                    flores de Bach para fortalecer tu conexión espiritual y
                    energética.
                  </Typography>
                </li>
              </ul>

              <Typography className="text-content">
                Cada ritual es una oportunidad para detenerte, reflexionar y
                reconectar con lo más profundo de tu ser. Al participar en
                nuestros rituales, encontrarás un espacio seguro y acogedor para
                explorar tus emociones, sanar viejas heridas y cultivar una
                mayor autocompasión y amor propio.
              </Typography>

              <Typography className="text-content">
                Descubre la magia y el poder de nuestros rituales y comienza tu
                viaje de transformación personal. Únete a nuestras ceremonias y
                experimenta una profunda sanación emocional y espiritual.
              </Typography>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bigWaPink"
              >
                ¡Inscríbete hoy mismo y vive la experiencia única de conectar
                contigo misma!
              </a>
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

export default ServicioPage;

import { Stack, Typography, useMediaQuery } from "@mui/material";
import { useEffect } from "react";
import { Navbar } from "../componentsNavbar/Navbar";
import "./contacto.css";

const ContactoPage = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Stack style={{paddingBottom: isMobile ? "10vh" : "0vh"}}>
      <Navbar />
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={isMobile ? 2 : 3}
        style={{
          height: isMobile ? "40vh" : "70vh",
          width: "100vw",
          backgroundColor: "#92a338",
          borderRadius: isMobile ? "0px 0px 18% 18%" : "0px 0px 25% 25%",
          paddingTop: isMobile ? "20vh" : "10vh",
          paddingBottom: isMobile ? "6vh" : "0vh",
        }}
        className="seccion1-container"
      >
        {/* Imagen hoja esquina inferior izquierda */}
        {/* Imagen hoja esquina superior derecha */}

        <Typography variant="h2" className="subtitle-contacto">
          Contactanos
        </Typography>

        <Typography variant="h2" className="text-center-contacto">
          En Anie Natural, estamos dedicados a liderar la industria de la
          cosmética natural y emocional, redefiniendo cómo las personas
          experimentan y cuidan su belleza y bienestar. Más allá de lo
          superficial, nos esforzamos por ofrecer una experiencia única y
          significativa, guiando a nuestros clientes hacia una auténtica
          conexión alma-mente-cuerpo.
          <br />
          <br />
          ¡Ponte en contacto con nosotros hoy y déjanos ayudarte a encontrar el
          camino hacia una belleza y bienestar auténticos!
        </Typography>
      </Stack>

      <Stack style={{ position: "relative", paddingLeft: isMobile ? "10%" : "25%", paddingTop: isMobile ? "10%" : "5%" }}>
        <img
          src="/images/hoja2.png"
          alt="hoja derecha"
          className="hoja-esquina-der-contacto"
        />

     {/* Imagen hoja esquina inferior izquierda */}
     <img src="/images/hoja1.png" alt="hoja izquierda" className="hoja-esquina-izq-contacto" />
        <Stack
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          style={{width: isMobile ? "100%" : "80%"}}
        >
          <Stack spacing={isMobile ? 2 : 8} >
            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
              <img src="/images/WA.png" alt="telefono" className="icon-contacto" style={{width: "8%", height: "auto"}}/>

              <Stack>
                <Typography variant="h2" className="title-contacto">
                  Teléfono
                </Typography>
                <Typography variant="h2" className="detalle-contacto">
                  +506 8754-9222
                </Typography>
              </Stack>
            </Stack>

            <Stack direction="row" justifyContent="flex-start" alignItems="center" spacing={2}>
            <img src="/images/RS.png" alt="telefono" className="icon-contacto" style={{width: "10%", height: "auto"}}/>

              <Stack>
                <Typography variant="h2" className="title-contacto">
                  Redes Sociales
                </Typography>
                <Typography variant="h2" className="detalle-contacto">
                  @anienatural
                </Typography>
              </Stack>
            </Stack>

            <Stack spacing={2}>
              <Typography variant="h2" className="accion-contacto">
                ¿Dónde encontrarnos?
              </Typography>

              <Typography variant="h2" className="detalle-contacto narrow">
                Cartago, 1.5km al oeste de RTV, frente a La Comarca
              </Typography>
            </Stack>
          </Stack>

          <img
            src="/images/contacto.png"
            alt="logo"
            className="logo-contacto"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ContactoPage;

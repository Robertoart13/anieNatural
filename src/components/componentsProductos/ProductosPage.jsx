import { Box, Button, Stack, Typography, useMediaQuery, Grid } from "@mui/material";
import Redes from "../componentsHome/Redes";

const ProductosPage = ({ producto }) => {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");

  const dataProductos = [
    {
      id: 1,
      nombre: "Producto 1",
      descripcion: "Descripción del producto 1",
      precio: "1.000",
      imagen: "/images/products/1.jpg",
      cantidad: "100 ml",
    },
    {
      id: 2,
      nombre: "Producto 2",
      descripcion: "Descripción del producto 2",
      precio: "2.000",
      imagen: "/images/products/2.jpg",
      cantidad: "100 ml",
    },
    {
      id: 3,
      nombre: "Producto 3",
      descripcion: "Descripción del producto 3",
      precio: "3.000",
      imagen: "/images/products/3.jpg",
      cantidad: "100 ml",
    },
    {
      id: 4,
      nombre: "Producto 4",
      descripcion: "Descripción del producto 4",
      precio: "4.000",
      imagen: "/images/products/4.jpg",
      cantidad: "100 ml",
    },
    {
      id: 5,
      nombre: "Producto 5",
      descripcion: "Descripción del producto 5",
      precio: "5.000",
      imagen: "/images/products/5.jpg",
      cantidad: "100 ml",
    },
    {
      id: 6,
      nombre: "Producto 6",
      descripcion: "Descripción del producto 6",
      precio: "6.000",
      imagen: "/images/products/6.jpg",
      cantidad: "100 ml",
    },
    {
      id: 7,
      nombre: "Producto 7",
      descripcion: "Descripción del producto 7",
      precio: "7.000",
      imagen: "/images/products/7.jpg",
      cantidad: "100 ml",
    },
    {
      id: 8,
      nombre: "Producto 8",
      descripcion: "Descripción del producto 8",
      precio: "8.000",
      imagen: "/images/products/8.jpg",
      cantidad: "100 ml",
    },
    {
      id: 9,
      nombre: "Producto 9",
      descripcion: "Descripción del producto 9",
      precio: "9.000",
      imagen: "/images/products/9.jpg",
      cantidad: "100 ml",
    },
    {
      id: 10,
      nombre: "Producto 10",
      descripcion: "Descripción del producto 10",
      precio: "10.000",
      imagen: "/images/products/10.jpg",
      cantidad: "100 ml",
    },
    {
      id: 11,
      nombre: "Producto 11",
      descripcion: "Descripción del producto 11",
      precio: "11.000",
      imagen: "/images/products/11.jpg",
      cantidad: "100 ml",
    },
    {
      id: 12,
      nombre: "Producto 12",
      descripcion: "Descripción del producto 12",
      precio: "12.000",
      imagen: "/images/products/12.jpg",
      cantidad: "100 ml",
    },
    {
      id: 13,
      nombre: "Producto 13",
      descripcion: "Descripción del producto 13",
      precio: "13.000",
      imagen: "/images/products/13.jpg",
      cantidad: "100 ml",
    },
    {
      id: 14,
      nombre: "Producto 14",
      descripcion: "Descripción del producto 14",
      precio: "14.000",
      imagen: "/images/products/14.jpg",
      cantidad: "100 ml",
    },
    {
      id: 15,
      nombre: "Producto 15",
      descripcion: "Descripción del producto 15",
      precio: "15.000",
      imagen: "/images/products/15.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 16,
    //   nombre: "Producto 16",
    //   descripcion: "Descripción del producto 16",
    //   precio: "16.000",
    //   imagen: "/images/products/16.jpg",
    //   cantidad: "100 ml",
    // },
    // {
    //   id: 17,
    //   nombre: "Producto 17",
    //   descripcion: "Descripción del producto 17",
    //   precio: "17.000",
    //   imagen: "/images/products/17.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 18,
      nombre: "Producto 18",
      descripcion: "Descripción del producto 18",
      precio: "18.000",
      imagen: "/images/products/18.jpg",
      cantidad: "100 ml",
    },
    {
      id: 19,
      nombre: "Producto 19",
      descripcion: "Descripción del producto 19",
      precio: "19.000",
      imagen: "/images/products/19.jpg",
      cantidad: "100 ml",
    },
    {
      id: 20,
      nombre: "Producto 20",
      descripcion: "Descripción del producto 20",
      precio: "20.000",
      imagen: "/images/products/20.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 21,
    //   nombre: "Producto 21",
    //   descripcion: "Descripción del producto 21",
    //   precio: "21.000",
    //   imagen: "/images/products/21.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 22,
      nombre: "Producto 22",
      descripcion: "Descripción del producto 22",
      precio: "22.000",
      imagen: "/images/products/22.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 23,
    //   nombre: "Producto 23",
    //   descripcion: "Descripción del producto 23",
    //   precio: "23.000",
    //   imagen: "/images/products/23.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 24,
      nombre: "Producto 24",
      descripcion: "Descripción del producto 24",
      precio: "24.000",
      imagen: "/images/products/24.jpg",
      cantidad: "100 ml",
    },
    {
      id: 25,
      nombre: "Producto 25",
      descripcion: "Descripción del producto 25",
      precio: "25.000",
      imagen: "/images/products/25.jpg",
      cantidad: "100 ml",
    },
    {
      id: 26,
      nombre: "Producto 26",
      descripcion: "Descripción del producto 26",
      precio: "26.000",
      imagen: "/images/products/26.jpg",
      cantidad: "100 ml",
    },
    {
      id: 27,
      nombre: "Producto 27",
      descripcion: "Descripción del producto 27",
      precio: "27.000",
      imagen: "/images/products/27.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 28,
    //   nombre: "Producto 28",
    //   descripcion: "Descripción del producto 28",
    //   precio: "28.000",
    //   imagen: "/images/products/28.jpg",
    //   cantidad: "100 ml",
    // },
    // {
    //   id: 29,
    //   nombre: "Producto 29",
    //   descripcion: "Descripción del producto 29",
    //   precio: "29.000",
    //   imagen: "/images/products/29.jpg",
    //   cantidad: "100 ml",
    // },
    // {
    //   id: 30,
    //   nombre: "Producto 30",
    //   descripcion: "Descripción del producto 30",
    //   precio: "30.000",
    //   imagen: "/images/products/30.jpg",
    //   cantidad: "100 ml",
    // },
    // {
    //   id: 31,
    //   nombre: "Producto 31",
    //   descripcion: "Descripción del producto 31",
    //   precio: "31.000",
    //   imagen: "/images/products/31.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 32,
      nombre: "Producto 32",
      descripcion: "Descripción del producto 32",
      precio: "32.000",
      imagen: "/images/products/32.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 33,
    //   nombre: "Producto 33",
    //   descripcion: "Descripción del producto 33",
    //   precio: "33.000",
    //   imagen: "/images/products/33.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 34,
      nombre: "Producto 34",
      descripcion: "Descripción del producto 34",
      precio: "34.000",
      imagen: "/images/products/34.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 35,
    //   nombre: "Producto 35",
    //   descripcion: "Descripción del producto 35",
    //   precio: "35.000",
    //   imagen: "/images/products/35.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 36,
      nombre: "Producto 36",
      descripcion: "Descripción del producto 36",
      precio: "36.000",
      imagen: "/images/products/36.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 37,
    //   nombre: "Producto 37",
    //   descripcion: "Descripción del producto 37",
    //   precio: "37.000",
    //   imagen: "/images/products/37.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 38,
      nombre: "Producto 38",
      descripcion: "Descripción del producto 38",
      precio: "38.000",
      imagen: "/images/products/38.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 39,
    //   nombre: "Producto 39",
    //   descripcion: "Descripción del producto 39",
    //   precio: "39.000",
    //   imagen: "/images/products/39.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 40,
      nombre: "Producto 40",
      descripcion: "Descripción del producto 40",
      precio: "40.000",
      imagen: "/images/products/40.jpg",
      cantidad: "100 ml",
    },
    {
      id: 41,
      nombre: "Producto 41",
      descripcion: "Descripción del producto 41",
      precio: "41.000",
      imagen: "/images/products/41.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 42,
    //   nombre: "Producto 42",
    //   descripcion: "Descripción del producto 42",
    //   precio: "42.000",
    //   imagen: "/images/products/42.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 43,
      nombre: "Producto 43",
      descripcion: "Descripción del producto 43",
      precio: "43.000",
      imagen: "/images/products/43.jpg",
      cantidad: "100 ml",
    },
    {
      id: 44,
      nombre: "Producto 44",
      descripcion: "Descripción del producto 44",
      precio: "44.000",
      imagen: "/images/products/44.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 45,
    //   nombre: "Producto 45",
    //   descripcion: "Descripción del producto 45",
    //   precio: "45.000",
    //   imagen: "/images/products/45.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 46,
      nombre: "Producto 46",
      descripcion: "Descripción del producto 46",
      precio: "46.000",
      imagen: "/images/products/46.jpg",
      cantidad: "100 ml",
    },
    {
      id: 47,
      nombre: "Producto 47",
      descripcion: "Descripción del producto 47",
      precio: "47.000",
      imagen: "/images/products/47.jpg",
      cantidad: "100 ml",
    },
    // {
    //   id: 48,
    //   nombre: "Producto 48",
    //   descripcion: "Descripción del producto 48",
    //   precio: "48.000",
    //   imagen: "/images/products/48.jpg",
    //   cantidad: "100 ml",
    // },
    {
      id: 49,
      nombre: "Producto 49",
      descripcion: "Descripción del producto 49",
      precio: "49.000",
      imagen: "/images/products/49.jpg",
      cantidad: "100 ml",
    },
    {
      id: 50,
      nombre: "Producto 50",
      descripcion: "Descripción del producto 50",
      precio: "50.000",
      imagen: "/images/products/50.jpg",
      cantidad: "100 ml",
    },
    {
      id: 51,
      nombre: "Producto 51",
      descripcion: "Descripción del producto 51",
      precio: "51.000",
      imagen: "/images/products/51.jpg",
      cantidad: "100 ml",
    },
    {
      id: 52,
      nombre: "Producto 52",
      descripcion: "Descripción del producto 52",
      precio: "52.000",
      imagen: "/images/products/52.jpg",
      cantidad: "100 ml",
    },
  ];

  const ProductItem = ({ productoData }) => {
    return (
      <Stack style={{ width:isMobile || isTablet ? "100%" : "250px", height: "400px" }} spacing={2}>
        <Box
          style={{
            width: "100%",
            height: "250px",
            backgroundImage: `url(${productoData.imagen})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        {/* <img src={productoData.imagen} alt={productoData.nombre} /> */}
        <Stack>
          <Typography className="title-productos">
            {productoData.nombre}
          </Typography>
          <Typography className="text-productos">
            {productoData.descripcion}
          </Typography>
          <Typography className="text-productos">
            {productoData.cantidad}
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography className="text-productos">PRECIO:</Typography>
            <Typography className="price-productos">
              ₡{productoData.precio}
            </Typography>
          </Stack>

          
        </Stack>
        <Button className="btn-add-cart">Agregar al carrito</Button>
      </Stack>
    );
  };

  return (
    <Stack
      sx={{
        marginTop: isMobile ? "32%" : isTablet ? "22%" : "8%",
        paddingBottom: "5%",
      }}
      spacing={8}
    >
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
        <Typography className="title-home">{producto.nombre}</Typography>
      </Stack>

      <Stack spacing={4} alignItems="center" justifyContent="center">
        <Stack alignItems="center" justifyContent="center" spacing={2}>
          {producto.id === 1 && (
            <>
              <Typography className="title-content">
                Embellece tu piel de manera natural con nuestra cosmética
                orgánica
              </Typography>

              <Typography className="text-content">
                Nuestros productos de cosmética natural están formulados con
                ingredientes orgánicos y extractos de plantas para cuidar tu
                piel de manera suave y eficaz. Cada fórmula está diseñada para
                realzar tu belleza natural mientras nutre y protege tu piel.
              </Typography>

              <Typography className="text-content">
                Explora nuestra gama de productos de cosmética natural y
                encuentra el cuidado perfecto para tu piel.
              </Typography>

              <Typography className="text-content">
                Descubre el poder de la naturaleza con nuestra línea de
                cosmética natural, ya que nuestros productos están formulados
                para realzar tu belleza natural mientras cuidan y nutren tu piel
                con ingredientes orgánicos y efectivos.
              </Typography>

              <Typography className="text-content">
                En Anie Natural, creemos en la importancia de utilizar
                ingredientes puros y naturales para cuidar tu piel. Nuestra gama
                de cosmética natural está cuidadosamente elaborada con extractos
                de plantas, aceites esenciales y otros componentes naturales que
                aportan múltiples beneficios para tu piel. Cada producto está
                diseñado para ofrecer resultados visibles y una experiencia
                sensorial única.
              </Typography>
              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Tratamientos Faciales:</strong> Nuestros
                    tratamientos faciales incluyen cremas, sueros y limpiadores
                    formulados para hidratar, revitalizar y proteger tu piel.
                    Utilizamos ingredientes como el aceite de jojoba, el aceite
                    de rosa mosqueta y el ácido hialurónico de origen natural
                    para garantizar una piel radiante y saludable.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Cuidado Corporal:</strong> Disfruta de lociones,
                    aceites y exfoliantes que nutren y suavizan tu piel.
                    Nuestros productos corporales están enriquecidos con manteca
                    de karité, aceite de coco y extractos botánicos que dejan tu
                    piel suave, hidratada y rejuvenecida.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Cuidado del Cabello:</strong> Ofrecemos champús y
                    acondicionadores naturales que fortalecen y revitalizan tu
                    cabello. Formulados con ingredientes como el aceite de
                    argán, el té verde y la manzanilla, nuestros productos
                    promueven un cabello sano y brillante.
                  </Typography>
                </li>
              </ul>
              <Typography className="text-content">
                Explora nuestra gama completa de productos de cosmética natural
                y encuentra el cuidado perfecto para tu piel y cabello. Descubre
                cómo la naturaleza puede transformar tu rutina de belleza.
                ¡Compra ahora y comienza tu viaje hacia una belleza auténtica y
                natural con Anie Natural!
              </Typography>

              <Typography className="text-content-center">
                ¡Compra ahora y comienza tu viaje hacia una belleza auténtica y
                natural con Anie Natural!
              </Typography>
              <Typography className="title-content">PRODUCTOS</Typography>
              
              <Grid container spacing={isMobile || isTablet ? 1 : 3} justifyContent="center" sx={{ width: "100%", maxWidth: "1200px", paddingBottom:"2%" }}>
                {dataProductos.map((producto) => (
                  <Grid item xs={6} sm={6} md={3} key={producto.id}>
                    <ProductItem productoData={producto} />
                  </Grid>
                ))}
              </Grid>
            
            </>
          )}
          {producto.id === 2 && (
            <>
              <Typography className="title-content">
                Equilibra tus emociones con nuestrasTerapia Floral
              </Typography>

              <Typography className="text-content">
                La terapia floral son remedios naturales que ayudan a equilibrar
                tus emociones y promover un bienestar integral. Nuestras mezclas
                personalizadas están diseñadas para ayudarte a enfrentar los
                desafíos emocionales del día a día con serenidad y fortaleza.
              </Typography>

              <Typography className="text-content">
                Descubre el poder de las Flores de Bach, Flores de California,
                Flores de Australia y desde luego Flores de Costa Rica y
                encuentra el equilibrio emocional que necesitas.
              </Typography>

              <Typography className="text-content">
                En Anie Natural, entendemos que el equilibrio emocional es
                fundamental para tu bienestar general. Nuestras esencias
                florales están diseñadas para ayudarte a armonizar tus
                emociones, promoviendo un estado de calma, claridad y bienestar
                interior.
              </Typography>

              <Typography className="text-content">
                Las Flores de Bach, Flores de California, Flores de Australia y
                Flores de Costa Rica son esencias naturales que trabajan de
                manera sutil pero poderosa para restaurar el equilibrio entre la
                mente y el cuerpo, ayudándote a liberar emociones negativas y
                potenciar las positivas. Cada esencia está formulada para
                abordar emociones específicas y promover una sanación completa.
              </Typography>
              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Mezclas Personalizadas:</strong> Nuestros expertos
                    en terapia floral crean mezclas personalizadas basadas en
                    tus necesidades emocionales individuales. Ya sea que estés
                    lidiando con el estrés, la ansiedad, la tristeza o la falta
                    de concentración, podemos diseñar una fórmula que te ayude a
                    encontrar tu equilibrio emocional.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Esencias Individuales:</strong> Ofrecemos una amplia
                    gama de esencias individuales que pueden ser utilizadas
                    solas o combinadas. Cada esencia está hecha de flores
                    silvestres y está destinada a tratar diferentes estados
                    emocionales, desde el miedo y la incertidumbre hasta la
                    soledad y el desaliento.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Kits de Bienestar:</strong> Nuestros kits de
                    bienestar son conjuntos cuidadosamente seleccionados de
                    esencias de Flores, diseñados para abordar necesidades
                    emocionales comunes como el estrés diario, la confianza en
                    uno mismo y la claridad mental. Perfectos para quienes
                    buscan un enfoque integral para su bienestar emocional.
                  </Typography>
                </li>
              </ul>
              <Typography className="text-content">
                Descubre el poder de las Flores y cómo pueden transformar tu
                bienestar emocional. Explora nuestra gama de esencias y mezclas
                personalizadas para encontrar la solución perfecta para tus
                necesidades.
              </Typography>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bigWaPink"
              >
                ¡Compra ahora y comienza tu viaje hacia un equilibrio emocional
                pleno con Anie Natural!
              </a>
            </>
          )}
          {producto.id === 3 && (
            <>
              <Typography className="title-content">
                Descubre nuestras mezclas exclusivas de aceites esenciales
              </Typography>

              <Typography className="text-content">
                En Anie Natural, hemos creado una línea de mezclas de aceites
                esenciales diseñadas para abordar diversas necesidades
                emocionales y de bienestar. Cada mezcla está formulada con
                precisión, combinando los mejores aceites esenciales para
                maximizar sus beneficios terapéuticos. Ya sea que busques
                relajar tu mente, energizar tu día o mejorar tu estado de ánimo,
                nuestras mezclas están aquí para ayudarte a encontrar el
                equilibrio y la armonía que necesitas.
              </Typography>

              <Typography className="text-content">
                En Anie Natural, te ofrecemos mezclas exclusivas de aceites
                esenciales, diseñadas para potenciar tu bienestar y transformar
                tu entorno. Nuestras mezclas combinan los mejores ingredientes
                naturales para crear sinergias aromáticas que promueven la
                relajación, la energía y el equilibrio emocional.
              </Typography>

              <Typography className="text-content">
                Nuestras mezclas de aceites esenciales están formuladas con
                precisión para abordar diversas necesidades emocionales y
                físicas. Cada mezcla es una combinación cuidadosamente
                seleccionada de aceites esenciales puros, creada para ofrecerte
                beneficios específicos de manera efectiva y agradable.
              </Typography>

              <ul style={{ width: "70%" }}>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Mezcla Relajante:</strong>Perfecta para reducir el
                    estrés y promover la calma, esta mezcla incluye aceites como
                    lavanda, bergamota y manzanilla, que trabajan juntos para
                    ayudarte a relajarte y encontrar paz interior. Ideal para el
                    final del día, puedes usarla en tu difusor o añadir unas
                    gotas a tu baño.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Mezcla Energizante:</strong>Diseñada para
                    revitalizar tu mente y cuerpo, esta mezcla combina aceites
                    de menta, limón y romero. Es ideal para usar por la mañana o
                    durante la tarde cuando necesitas un impulso de energía y
                    claridad mental.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Mezcla para el Sueño:</strong> Formulada para
                    mejorar la calidad del sueño, esta mezcla incluye aceites
                    como lavanda, ylang-ylang y cedro. Usa esta mezcla en tu
                    difusor antes de acostarte para crear un ambiente tranquilo
                    y favorecer un sueño profundo y reparador.
                  </Typography>
                </li>
                <li>
                  <Typography className="text-content-servicios">
                    <strong>Mezcla Equilibrante:</strong> Perfecta para
                    equilibrar tus emociones y promover el bienestar general,
                    esta mezcla incluye aceites como geranio, incienso y salvia.
                    Úsala durante tus prácticas de meditación o yoga para
                    potenciar tu conexión interior y armonía emocional.
                  </Typography>
                </li>
              </ul>

              <Typography className="text-content">
                Descubre cómo nuestras mezclas de aceites esenciales pueden
                mejorar tu bienestar diario y transformar tu espacio en un
                refugio de tranquilidad y energía positiva. Explora nuestras
                mezclas exclusivas y encuentra la que mejor se adapta a tus
                necesidades.
              </Typography>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-bigWaPink"
              >
                ¡Compra ahora y empieza a disfrutar de los beneficios de la
                aromaterapia con Anie Natural!
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

export default ProductosPage;

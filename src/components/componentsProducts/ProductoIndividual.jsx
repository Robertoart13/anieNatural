import { Box, Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import { Navbar } from "../componentsNavbar/Navbar"
import "./productosIndividual.css"
import PropTypes from "prop-types"
import { useEffect } from "react";


const ProductItem = ({ productoData, getImageUrl }) => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");

    const handlePedirInformacion = () => {
        const imageUrl = getImageUrl(productoData.imagen);
        const mensaje = `🛍️ *SOLICITUD DE INFORMACIÓN - ANIE NATURAL* 🛍️

*Producto:* ${productoData.nombre}
*Descripción:* ${productoData.descripcion}
*Precio:* ₡${productoData.precio}
*Cantidad:* ${productoData.cantidad}

Hola! Me interesa obtener más información sobre este producto. ¿Podrían ayudarme con detalles adicionales, disponibilidad y formas de pago?

¡Gracias! 🌿

${imageUrl}`;
        
        const numeroWhatsApp = "50687515938";
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    };

    return (
      <Stack direction="row" spacing={3} style={{ width: "100%", minHeight: "300px", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px" }}>
        {/* Imagen a la izquierda */}
        <Box
          style={{
            width: "200px",
            height: "250px",
            backgroundImage: `url(${productoData.imagen})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            flexShrink: 0
          }}
        />
        
        {/* Contenido a la derecha */}
        <Stack style={{ flex: 1, justifyContent: "space-between" }}>
          <Stack spacing={2}>
            <Typography className="title-productos">
              {productoData.nombre}
            </Typography>
            <Typography className="text-productos-horizontal">
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
          <Button className="btn-add-cart" onClick={handlePedirInformacion} style={{ alignSelf: "flex-start", marginTop: "10px" }}>
            Pedir más información
          </Button>
        </Stack>
      </Stack>
    );
  };

const ProductoIndividual = ({pId}) => {

   useEffect(() => {
    window.scrollTo(0, 0);
}, []);

    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
    
    // Función para convertir rutas relativas a URLs completas
    const getImageUrl = (relativePath) => {
        const imageNumber = relativePath.match(/(\d+)\.jpg$/)?.[1];
        if (imageNumber) {
            return `https://anienatural.com/${imageNumber}.jpg`;
        }
        return relativePath;
    };
    const detallesProductos = [
        {
            id: 1,
            name: "Cosmética natural",
            color: "#5d6939",
            text1: "Nuestros productos de cosmética natural están formulados con ingredientes orgánicos y extractos de plantas para cuidar tu piel de manera suave y eficaz. Cada fórmula está diseñada para realzar tu belleza natural mientras nutre y protege tu piel.",
            text2: "Explora nuestra gama de productos de cosmética natural y encuentra el cuidado perfecto para tu piel.",
            text3:"Descubre el poder de la naturaleza con nuestra línea de cosmética natural, ya que nuestros productos están formulados para realzar tu belleza natural mientras cuidan y nutren tu piel con ingredientes orgánicos y efectivos.",
            categorias: [
                {
                    id: 1,
                    nombre: "LÍNEA IXCHEL",
                    clase: "ixchel",
                    items: [
                        {
                            id: 1,
                            nombre: "Crema Dolores Musculares",
                            descripcion: `Diseñada para reducir dolores, con un olor
                                    agradable. Tiene aceites esenciales y flores que
                                    ayudan a enfrentar las heridas emocionales.
                                    Posee aceites como el tanaceto azul, alcanfor,
                                    hierbabuena, helicriso y otros. Posee flores como
                                    gavilana y majagua. Es de rápida absorción y
                                    con características antiiflamatorias. Calma
                                    irritaciones de la piel, rica en vitaminas A, B y E,
                                    minerales antioxidantes, hidrata y nutre la piel.
                                    `,
                            precio: "7.000",
                            imagen: "/images/products/53.jpg",
                            cantidad: "",
                          },
                          {
                            id: 2,
                            nombre: "Crema Várices",
                            descripcion: `Contiene aceites esenciales y flores que promueven el
                                      movimiento y el flujo de energía, ayudando a fluir en la
                                      vida. Cuenta con ciprés que genera un flujo energético,
                                      generando flexibilidad. También posee menta, mejorana
                                      y otros que nos ayudan a relajarnos, calmarnos y liberar
                                      la tensión física. Con características antiinflamatorias, es
                                      de rápida absorción, calma irritaciones de la piel, rica en
                                      vitaminas A, B y E y minerales antioxidantes. Hidrata y
                                      nutre la piel, dejándola lisa.`,
                            precio: "7.000",
                            imagen: "/images/products/54.jpg",
                            cantidad: "",
                          },
                        ]
                  },
                  {
                    id: 1,
                    nombre: "LÍNEA INMORTAL",
                    clase: "inmortal",
                    items: [
                        {
                            id: 1,
                            nombre: "Crema Reafirmante",
                            descripcion: `Diseñada con aceites esenciales como abeto
                                    siberiano, Tuya, granada y otros que ayudan a
                                    mantener el equilibrio corporal, a recuperar la
                                    confianza con gracia, que nos conecta con la
                                    perspectiva del paso del tiempo, dándonos
                                    comodidad. Posee características antiinflamatorias,
                                    es de rápida absorción, calma irritaciones de la piel,
                                    rica en vitaminas A, B y E y minerales antioxidantes.
                                    Hidrata y nutre la piel, dejándola lisa.
                                    `,
                            precio: "11.000",
                            imagen: "/images/products/1.jpg",
                            cantidad: "100 ml",
                          },
                          {
                            id: 2,
                            nombre: "Gel Antiestrías y anti celulítis",
                            descripcion: `Contiene elementos que activan los ácidos
                                    grasos y los eliminan para mejorar la
                                    apariencia de la piel. Impulsan la circulación
                                    sanguínea de la piel y la epidermis. Activan
                                    la lipolisis que reduce el tamaño y número
                                    de depósitos de grasa. Promueve la
                                    desintoxicación de la piel, reafirma y alisa la
                                    zona a tratar. Tiene acción drenante para
                                    combatir la retención de líquidos.
                                    `,
                            precio: "6.000",
                            imagen: "/images/products/2.jpg",
                            cantidad: "100 ml",
                          },
                          {
                            id: 3,
                            nombre: "Serum Facial",
                            descripcion: `Tiene la ventaja de poseer partículas
                                    más pequeñas y por lo tanto aumenta la
                                    concentración de bioelementos y
                                    principios activos que penetran en capas
                                    más profundas de la piel, por lo que
                                    ayuda a controlar las líneas de expresión,
                                    de manera más profunda, siendo un
                                    botox natural.
                                    `,
                            precio: "12.000",
                            imagen: "/images/products/7.jpg",
                            cantidad: "100 ml",
                          },
                        ]
                  },
                  {
                    id: 1,
                    nombre: "LÍNEA AURORA",
                    clase: "aurora",
                    items: [
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
                        ]
                  },
                  
            ]

        },
        {
            id: 2,
            name: "Terapia Floral",
            color: "#ffff",
            text1: "La terapia floral son remedios naturales que ayudan a equilibrar tus emociones y promover un bienestar integral. Nuestras mezclas personalizadas están diseñadas para ayudarte a enfrentar los desafíos emocionales del día a día con serenidad y fortaleza.",
            text2: "Descubre el poder de las Flores de Bach, Flores de California, Flores de Australia y desde luego Flores de Costa Rica y encuentra el equilibrio emocional que necesitas",
            text3:"En Anie Natural, entendemos que el equilibrio emocional es fundamental para tu bienestar general. Nuestras esencias florales están diseñadas para ayudarte a armonizar tus emociones, promoviendo un estado de calma, claridad y bienestar interior",
            categorias: [
                {
                    id: 1,
                    nombre: "LÍNEA FLOREZCO",
                    clase: "ixchel",
                    items: [
                        {
                            id: 1,
                            nombre: "Tónico Facial",
                            descripcion: `Tiene el poder que impregna la rosa y/o la lavanda,
                                          dependiendo de la presentación a elegir. Es una loción
                                          fundamental para el cuidado del cutis, ya que ayuda a
                                          reestablecer el pH del rostro después de haber sido
                                          sometido a la limpieza. Aporta hidratación y ayuda a
                                          quitar impurezas y celulas muertas. Prepara la piel para
                                          absorber el resto de productos de manera más eficaz.`,
                            precio: "6.000",
                            imagen: "/images/products/1.jpg",
                            cantidad: "",
                          },
                          {
                            id: 2,
                            nombre: "Crema Corporal",
                            descripcion: `Diseñada para poder vivir en paz,
                                          brindando confianza, seguridad y
                                          amor. Posee características
                                          antiinflamatorias, es de rápida
                                          absorción, calma irritaciones de
                                          la piel. Rica en vitaminas A, B y E
                                          y minerales antioxidantes.
                                          Hidrata y nutre la piel, dejándola
                                          lisa y regenera tejido.
                                          `,
                            precio: "7.000",
                            imagen: "/images/products/35.jpg",
                            cantidad: "100 ml",
                          },
                          {
                            id: 3,
                            nombre: "Crema Facial iluminadora",
                            descripcion: `Posee el poder de las almendras,
                              jojoba y rosa moqueta, entre
                              otros aceites, así como las flores
                              mimosa, rosa roja y dalia. Posee
                              vitamina E y colágeno. Es una
                              crema que humecta, da suavidad
                              y nutre la piel. Posee aceites
                              esenciales que ayudan a reducir
                              cicatrices y líneas de expresión.
                              `,
                            precio: "5.000",
                            imagen: "/images/products/20.jpg",
                            cantidad: "100 ml",
                          },
                          {
                            id: 3,
                            nombre: "Contorno de ojos",
                            descripcion: `Posee un aceite regenerador
                                celular para la piel. Ideal en la
                                zona del contorno de ojos. Posee
                                vitamina E y colágeno. Es una
                                crema que hidrata, da suavidad y
                                nutre la piel. Posee aceites
                                esenciales que ayuda a reducir
                                cicatrices y líneas de expresión,
                                brindando claridad y luminosidad
                                al rostro.
                              `,
                            precio: "3.000",
                            imagen: "/images/products/36.jpg",
                            cantidad: "",
                          },
                          {
                            id: 3,
                            nombre: "Crema Facial Noche",
                            descripcion: `Es una crema antimanchas que
                                        posee más de 20 aceites
                                        esenciales como manzano
                                        silvestre, bella de noche y otras.
                                        Posee el poder de la caléndula,
                                        almendras, jojoba y rosa moqueta.
                                        Tiene vitamina E y colágeno. Es
                                        una crema que hidrata, da
                                        suavidad y nutre la piel.
                                        .
                              `,
                            precio: "5.000",
                            imagen: "/images/products/25.jpg",
                            cantidad: "",
                          },
                        ]
                  },
                  
            ]

        },
        {
            id: 3,
            name: "Aceites Esenciales",
            color: "#e9ecd9",
            text1: "Nuestros aceites esenciales son perfectos para aromaterapia y cuidado personal. Seleccionados por sus propiedades terapéuticas, cada aceite ofrece beneficios para la salud emocional y física, ayudándote a crear un ambiente de bienestar en tu hogar.",
            text2: "Nuestros aceites esenciales puros y naturales están diseñados para revitalizar tus sentidos, mejorar tu bienestar emocional y transformar tu hogar en un santuario de tranquilidad y equilibrio.",
            text3:"Son extraídos de las plantas más finas y puras, asegurando que cada gota contenga las propiedades terapéuticas necesarias para mejorar tu bienestar físico y emocional. Ya sea que los utilices para la aromaterapia, masajes, o cuidados personales, nuestros aceites esenciales son una adición perfecta a tu rutina de autocuidado.",
            categorias: [
                {
                    id: 1,
                    nombre: "LÍNEA ACEITES ESENCIALES",
                    clase: "ixchel",
                    items: [
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
                        ]
                  },
                  
            ]

        },
    ]
   
    const producto = detallesProductos.find(p => p.id === pId);

  return (
 <Stack>
      <Navbar/>
      <Stack justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 3} style={{height: isMobile ? "40vh" : "50vh",width:"100vw",backgroundColor: producto.id === 1 ? "#e9ecd9" : producto.id === 2 ? "#eaa692" : "#687658", borderRadius: isMobile ? "0px 0px 18% 18%" : "0px 0px 25% 25%", paddingTop: isMobile ? "20vh" : "10vh", paddingBottom: isMobile ? "6vh" : "0vh"}} className="seccion1-container">
      {/* Imagen hoja esquina inferior izquierda */}
      <img src="/images/hoja1.png" alt="hoja izquierda" className="hoja-esquina-izq" style={{bottom:producto.id === 1 ? "20%" : "", left:producto.id === 1 ? "-12%" : ""}}/>
      {/* Imagen hoja esquina superior derecha */}
      <img src="/images/hoja2.png" alt="hoja derecha" className="hoja-esquina-der" />

      


      <Typography variant="h2" className='subtitle-producto' style={{color: producto.color}}>{producto ? producto.name : "Producto no encontrado"}</Typography>
{
    producto && producto.text1 && (
        <Typography variant="h2" className='text-center-producto' style={{color: producto.color}}>{producto.text1}</Typography>
    )
}
{
    producto && producto.text2 && (
        <Typography variant="h2" className='text-center-producto' style={{color: producto.color}}>{producto.text2}</Typography>
    )
}
{
    producto && producto.text3 && (
        <Typography variant="h2" className='text-center-producto' style={{color: producto.color}}>{producto.text3}</Typography>
    )
}

    </Stack>
    {producto.id === 1 && <img src="/images/decoracion.png" alt="logo" className='decoracion' />}
    <Stack spacing={5} justifyContent="center" alignItems="center" style={{marginTop: "10vh", width: "100%",}}>
       {producto.categorias.map((categoria) => (
         <Stack key={categoria.id} justifyContent="center" alignItems="center" spacing={5} style={{width: "100%"}}>
           <Typography variant="h2" className={`${categoria.clase}`}>{categoria.nombre}</Typography>
           <Stack style={{width: "90%"}}>
             <Grid container spacing={isMobile || isTablet ? 2 : 3} justifyContent="center" sx={{ width: "100%", paddingBottom:"2%", marginLeft:"0%" }}>
               {categoria.items.map((item) => (
                 <Grid justifyContent="center" alignItems="center" item xs={12} sm={12} md={6} lg={4} key={item.id+categoria.id} style={{display: "flex"}}>
                   <ProductItem productoData={item} getImageUrl={getImageUrl} />
                 </Grid>
               ))}
             </Grid>
           </Stack>
         </Stack>
       ))}
    </Stack>

 </Stack>
  )
}

ProductoIndividual.propTypes = {
  pId: PropTypes.number.isRequired
}

ProductItem.propTypes = {
  productoData: PropTypes.shape({
    imagen: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    descripcion: PropTypes.string.isRequired,
    cantidad: PropTypes.string.isRequired,
    precio: PropTypes.string.isRequired,
  }).isRequired,
  getImageUrl: PropTypes.func.isRequired
}

export default ProductoIndividual

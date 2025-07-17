import { Box, Button, Grid, Stack, Typography, useMediaQuery } from "@mui/material"
import { Navbar } from "../componentsNavbar/Navbar"
import "./productosIndividual.css"
import PropTypes from "prop-types"
import { useEffect } from "react";


const ProductItem = ({ productoData }) => {
    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");

 

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

const ProductoIndividual = ({pId}) => {

   useEffect(() => {
    window.scrollTo(0, 0);
}, []);

    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery("(min-width: 601px) and (max-width: 1024px)");
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
                  {
                    id: 1,
                    nombre: "LÍNEA INMORTAL",
                    clase: "inmortal",
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
                    nombre: "LÍNEA TERAPIA FLORAL",
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
             <Grid container spacing={isMobile || isTablet ? 1 : 1} justifyContent="center" sx={{ width: "100%", paddingBottom:"2%", marginLeft:"0%" }}>
               {categoria.items.map((item) => (
                 <Grid justifyContent="center" alignItems="center" item xs={6} sm={6} md={3} key={item.id+categoria.id} style={{display: "flex"}}>
                   <ProductItem productoData={item} />
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
  }).isRequired
}

export default ProductoIndividual

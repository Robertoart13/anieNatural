    import { Stack, Typography, useMediaQuery } from '@mui/material'
import { Navbar } from '../componentsNavbar/Navbar'
import './productos.css'
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const ProductosPage = () => {
    const isMobile = useMediaQuery('(max-width: 600px)');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const productos = [

        {
            id: 1,
            title: "Cosmética Natural",
            description: "Descubre nuestros tratamientos faciales y corporales, diseñados para embellecer tu piel con ingredientes naturales y orgánicos",
            url: "/productos/cosmetica-natural",
            type: "dark",
            color: "#e9ecd9",
            flecha: "/images/flecha2.png"
        },
        // {
        //     id: 2,
        //     title: "Terapia floral",
        //     description: "Equilibra tus emociones con nuestras mezclas personalizadas de Flores de Bach, flores de Australia, Flores de California y desde luego flores de Costa Rica, ideales para enfrentar los desafíos emocionales diarios.",
        //     url: "/productos/terapia-floral",
        //     type: "light",
        //     color: "#eaa692",
        //     flecha: "/images/flecha.png"
        // },
        // {
        //     id: 3,
        //     title: "Aceites esenciales",
        //     description: "Revitaliza tus sentidos con nuestros aceites esenciales puros, perfectos para aromaterapia y cuidado personal. Además, explora nuestras Mezclas exclusivas de aceites esenciales, formuladas para potenciar tus rituales de autocuidado y armonizar tu espacio.",
        //     url: "/productos/aceites-esenciales",
        //     type: "light",
        //     color: "#687658",
        //     flecha: "/images/flecha2.png"
        // }
    ]
  return (
    <Stack>
      <Navbar/>
      <Stack justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 3} style={{height: isMobile ? "40vh" : "70vh",width:"100vw",backgroundColor:"#bec88a", borderRadius: isMobile ? "0px 0px 18% 18%" : "0px 0px 25% 25%", paddingTop: isMobile ? "20vh" : "10vh", paddingBottom: isMobile ? "6vh" : "0vh"}} className="seccion1-container">
      {/* Imagen hoja esquina inferior izquierda */}
      <img src="/images/hoja1.png" alt="hoja izquierda" className="hoja-esquina-izq" />
      {/* Imagen hoja esquina superior derecha */}
      <img src="/images/hoja2.png" alt="hoja derecha" className="hoja-esquina-der" />

      <img src="/images/cosmetica.png" alt="logo" className='logo' />

     


      <Typography variant="h2" className='subtitle'>Productos</Typography>

      <Typography variant="h2" className='text-center'>
      Explora nuestra selección de productos cuidadosamente elaborados
con ingredientes naturales y orgánicos. Cada uno de nuestros productos
está formulado para ofrecerte lo mejor de la naturaleza, ayudándote a
realzar tu belleza natural y promover un bienestar integral.

      </Typography>


    </Stack>



    <Stack direction="row" justifyContent="center" alignItems="center" spacing={isMobile ? 2 : 10} style={{padding: isMobile ? "5vh 2vw" : "10vh 0vw"}}>

{productos.map((producto) => (
    <Stack key={producto.id} justifyContent="center" alignItems="center" className={`card-productos`} spacing={isMobile ? 2 : 5} style={{backgroundColor: producto.color}}>
        <Stack style={{padding:"5%"}}>
            <Typography variant="h2" className={`card-title-productos ${producto.type}`}>{producto.title}</Typography>
            <Typography variant="h6" className={`card-description ${producto.type}`}>{producto.description}</Typography>
            <NavLink to={producto.url} className='flecha-link' style={{textDecoration:"none", display:"flex", justifyContent:"center", alignItems:"center"}}>
            <img src={producto.flecha} alt="flecha" className='flecha' style={{width: isMobile ? "20%" : "10%", marginTop:"10%"}}/>
        </NavLink>
        </Stack>

       
    </Stack>
))}


</Stack>

    </Stack>
  )
}

export default ProductosPage

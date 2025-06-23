import Navbar from "./components/componentsNavbar/Navbar"
import "./styles/fonts-import.css"
import Home from "./components/componentsHome/Home"
import { Stack } from "@mui/material"
import Servicios from "./components/componentsServicios/Servicios"
import { useLocation } from "react-router-dom"
import ServicioPage from "./components/componentsServicios/ServicioPage"
import Productos from "./components/componentsProductos/Productos"
import ProductosPage from "./components/componentsProductos/ProductosPage"
import Capacitaciones from "./components/componentsCapacitaciones/Capaticaciones"
import CapacitacionesPage from "./components/componentsCapacitaciones/CapacitacionesPage"
import Contacto from "./components/ComponentsContacto/Contacto"
const Landing = () => {
  const location = useLocation()
  const path = location.pathname

  const servicios = [
    {
      id: 1,
      nombre: "Terapia Personalizada",
    },

    {
      id: 2,
      nombre: "Meditación Guiada",
    },

    {
      id: 3,
      nombre: "Ceremonias",
    }
  ]

  const productos = [
    {
      id: 1,
      nombre: "Cosmética Natural",
    },

    { 
      id: 2,
      nombre: "Terapia Floral",
    },

    {
      id: 3,
      nombre: "Aceites Esenciales y Mezclas",
    }
  ]

  const capacitaciones = [
    {
      id: 1,
      nombre: "Talleres Presenciales",
    },

    {
      id: 2,
      nombre: "Cursos en linea",
    }
  ]

  const renderComponent = () => {
    switch(path) {
      case '/':
        return <Home />
      case '/servicios':
        return <Servicios />
      case '/servicios/terapia':
        return <ServicioPage servicio={servicios[0]}/>
      case '/servicios/meditacion':
        return <ServicioPage servicio={servicios[1]}/>
      case '/servicios/ceremonia':
        return <ServicioPage servicio={servicios[2]}/>
      case '/productos':
        return <Productos/>
      case '/productos/cosmetica':
        return <ProductosPage producto={productos[0]}/>  
      case '/productos/terapia':
        return <ProductosPage producto={productos[1]}/>
      case '/productos/aromaterapia':
        return <ProductosPage producto={productos[2]}/>
      case '/capacitaciones':
        return <Capacitaciones/>
      case '/capacitaciones/presenciales':
        return <CapacitacionesPage capacitacion={capacitaciones[0]}/>
      case '/capacitaciones/online':
        return <CapacitacionesPage capacitacion={capacitaciones[1]}/>
      case '/contacto':
        return <Contacto/>
      default:
        return <Home />
    }
  }

  return (
    <Stack>
      <Navbar/>
      {renderComponent()}
    </Stack>
  )
}

export default Landing

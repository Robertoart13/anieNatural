import { Route, Routes } from "react-router-dom";
import { Landing } from "../Landing";
import ProductosPage from "../components/componentsProducts/ProductosPage";
import ProductoIndividual from "../components/componentsProducts/ProductoIndividual";
import ServiciosPage from "../components/componentsServicios/ServiciosPage";
import CapacitacionesPage from "../components/componentsCapacitaciones/CapacitacionesPage";
import ContactoPage from "../components/compnentsContacto/ContactoPage";








export const App_Router = () => {


  const productos = [
    {
      id: 1,
      name: "cosmetica",
      url: "/productos/cosmetica-natural",
    },
    {
      id: 2,
      name: "terapia-floral",
      url: "/productos/terapia-floral",
    },
    {
      id: 3,
      name: "aceites-esenciales",
      url: "/productos/aceites-esenciales",
    },
    
    
  ]
    
    return (
        <Routes>
          
          <Route path="/*" element={<Landing/>} />
          <Route path="/productos" element={<ProductosPage/>} />
          <Route path="/servicios" element={<ServiciosPage/>} />
          <Route path="/capacitaciones" element={<CapacitacionesPage/>} />
          <Route path="/contacto" element={<ContactoPage/>} />
          {productos.map((producto) => (
            <Route key={producto.id} path={producto.url} element={<ProductoIndividual pId={producto.id}/>} />
          ))}

            
        </Routes>
    );
};
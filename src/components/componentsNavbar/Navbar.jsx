import { Stack, Typography, useMediaQuery } from '@mui/material'
import './navbar.css'
import { Link, useLocation } from 'react-router-dom'

export const Navbar = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const location = useLocation();

  // Función para determinar si un enlace está activo
  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  // Función para obtener la clase CSS dinámicamente
  const getNavClass = (path) => {
    return `nav-text ${isActive(path) ? 'active' : ''}`;
  };


  return (
    <div style={{ background: 'transparent', padding: '16px 0', width: isMobile ? '100%' : '100vw', position:"fixed", zIndex:1000}}>
      <Stack direction="row" justifyContent="center" alignItems="center">
        <Stack direction="row" alignItems="center" justifyContent="space-between" style={{
          width: isMobile ? '90%' : '95vw',
          background: '#fff',
          borderRadius: '32px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
          padding: isMobile ? '8px 16px' : '8px 32px',
          minHeight: isMobile ? '20px' : '60px',
        }}>
            <Stack style={{width:"40%"}}>
            <img src="/images/logosmall.png" alt="logo" style={{ width: isMobile ? '30%' : '8%', height: 'auto', marginRight: '32px' }} />
            </Stack>
          
          <Stack direction="row" spacing={isMobile ? 1.5 : 4} alignItems="center" >
            <Link to="/" className={getNavClass('/')}>Inicio</Link>
            <Link to="/servicios" className={getNavClass('/servicios')}>Servicios</Link>
            <Link to="/productos" className={getNavClass('/productos')}>Productos</Link>
            <Link to="/capacitaciones" className={getNavClass('/capacitaciones')}>Capacitaciones</Link>
            <Link to="/contacto" className={getNavClass('/contacto')}>Contacto</Link>
          </Stack>
        </Stack>
      </Stack>
    </div>
  )
}

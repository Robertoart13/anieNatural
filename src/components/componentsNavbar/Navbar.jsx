import { Stack, Typography, Menu, MenuItem, useMediaQuery, IconButton, Drawer, List, ListItem, Collapse } from "@mui/material";
import { NavLink, useLocation } from "react-router-dom";
import { useState, useRef } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import "./navbar.css";

export default function Navbar() {
  const isMobile = useMediaQuery('(max-width: 600px)');
  const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({
    servicios: false,
    productos: false,
    capacitaciones: false
  });
  const menuRefs = {
    servicios: useRef(null),
    productos: useRef(null),
    capacitaciones: useRef(null)
  };

  const handleMenuOpen = (menuName) => () => {
    setActiveMenu(menuName);
  };

  const handleMenuClose = () => {
    setActiveMenu(null);
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleCategoryToggle = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const serviciosOptions = [
    { path: "/servicios/terapia", label: "Terapia Personalizada" },
    { path: "/servicios/meditacion", label: "Meditaciones Guiadas" },
    { path: "/servicios/ceremonia", label: "Ceremonias" }
  ];

  const productosOptions = [
    { path: "/productos/cosmetica", label: "Cosmética Natural" },
    { path: "/productos/terapia", label: "Terapia Floral" },
    { path: "/productos/aromaterapia", label: "Aceites Esenciales y Mezclas" }
  ];

  const capacitacionesOptions = [
    { path: "/capacitaciones/presenciales", label: "Talleres Presenciales" },
    { path: "/capacitaciones/online", label: "Cursos en linea" }
  ];

  const renderDropdownMenu = (menuName, options, pathPrefix) => (
    <div
      ref={menuRefs[menuName]}
      onMouseEnter={handleMenuOpen(menuName)}
      onMouseLeave={handleMenuClose}
      style={{ height: "100%", display: "flex", alignItems: "center" }}
    >
      <NavLink 
        to={`/${pathPrefix}`}
        className={`nav-link ${location.pathname.startsWith(`/${pathPrefix}`) ? "active" : ""}`}
      >
        {pathPrefix.charAt(0).toUpperCase() + pathPrefix.slice(1)} <img src="/images/DownArrow.svg" alt="arrow-down" style={{ width: "10px", height: "10px" }} />
      </NavLink>
      <Menu
        anchorEl={menuRefs[menuName].current}
        open={activeMenu === menuName}
        onClose={handleMenuClose}
        MenuListProps={{ 
          onMouseLeave: handleMenuClose,
          onMouseEnter: () => setActiveMenu(menuName)
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        style={{ pointerEvents: 'none' }}
        PaperProps={{
          style: { pointerEvents: 'auto',  backgroundColor: "#eda692", marginTop: "1%" }
        }}
      >
        {options.map((option) => (
          <MenuItem 
            key={option.path}
            component={NavLink}
            to={option.path}
            onClick={handleMenuClose}
            className={"nav-linkSub"}
          >
            {option.label}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );

  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileMenuOpen}
      onClose={handleMobileMenuToggle}
      PaperProps={{
        style: { backgroundColor: "#eda692", width: "70%" }
      }}
    >
      <List>
        <ListItem>
          <NavLink 
            to="/" 
            className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            onClick={handleMobileMenuToggle}
          >
            Inicio
          </NavLink>
        </ListItem>

        <ListItem button onClick={() => handleCategoryToggle('servicios')}>
          <NavLink 
            to="/servicios"
            className={`nav-link ${location.pathname.startsWith("/servicios") ? "active" : ""}`}
          >
            Servicios
          </NavLink>
          {expandedCategories.servicios ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expandedCategories.servicios} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {serviciosOptions.map((option) => (
              <ListItem key={option.path} style={{ paddingLeft: "20px" }}>
                <NavLink 
                  to={option.path}
                  className={`nav-link ${location.pathname === option.path ? "active" : ""}`}
                  onClick={handleMobileMenuToggle}
                >
                  {option.label}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem button onClick={() => handleCategoryToggle('productos')}>
          <NavLink 
            to="/productos"
            className={`nav-link ${location.pathname.startsWith("/productos") ? "active" : ""}`}
          >
            Productos
          </NavLink>
          {expandedCategories.productos ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expandedCategories.productos} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {productosOptions.map((option) => (
              <ListItem key={option.path} style={{ paddingLeft: "20px" }}>
                <NavLink 
                  to={option.path}
                  className={`nav-link ${location.pathname === option.path ? "active" : ""}`}
                  onClick={handleMobileMenuToggle}
                >
                  {option.label}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem button onClick={() => handleCategoryToggle('capacitaciones')}>
          <NavLink 
            to="/capacitaciones"
            className={`nav-link ${location.pathname.startsWith("/capacitaciones") ? "active" : ""}`}
          >
            Capacitaciones
          </NavLink>
          {expandedCategories.capacitaciones ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expandedCategories.capacitaciones} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {capacitacionesOptions.map((option) => (
              <ListItem key={option.path} style={{ paddingLeft: "20px" }}>
                <NavLink 
                  to={option.path}
                  className={`nav-link ${location.pathname === option.path ? "active" : ""}`}
                  onClick={handleMobileMenuToggle}
                >
                  {option.label}
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Collapse>

        <ListItem>
          <NavLink 
            to="/contacto" 
            className={`nav-link ${location.pathname === "/contacto" ? "active" : ""}`}
            onClick={handleMobileMenuToggle}
          >
            Contacto
          </NavLink>
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <Stack style={{position: "fixed", width:"100%", zIndex: 1000}}>
      <Stack
        direction={isMobile || isTablet ? "column" : "row"}
        justifyContent="center"
        alignItems="center"
        spacing={isMobile || isTablet ? 1 : 2}
        style={{ backgroundColor: "#f4cccc", padding: isMobile || isTablet ? "3% 0%" : "1% 0%" }}
      >
        <Typography className="contacto-wa">Contáctanos vía WhatsApp</Typography>
        <a href="https://wa.me/573178555663" target="_blank" rel="noopener noreferrer" className="btn-wa">Enviar Mensaje</a>
      </Stack>

      <Stack direction="row" justifyContent="space-between" alignItems="center" style={{ backgroundColor: "#eda692", padding: isMobile || isTablet ? "1% 5%" : "0.5% 5%" }}>
        <Stack direction="row" alignItems="center" spacing={2} style={{ height: "100%" }}>
          <img src="/images/Logo.png" alt="logo" style={{ width: isMobile || isTablet ? "15%" : "8%" }} />
          {!isMobile && !isTablet && (
            <Typography className="titulo-nav">
              Anie Natural - Terapia y Cosmética Vibracional...
            </Typography>
          )}
        </Stack>

        {isMobile || isTablet ? (
          <>
            <IconButton onClick={handleMobileMenuToggle} style={{ color: 'black' }}>
              <MenuIcon/>
            </IconButton>
            {renderMobileMenu()}
          </>
        ) : (
          <Stack direction="row" alignItems="center" spacing={3} style={{ height: "100%" }}>
            <NavLink 
              to="/" 
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
            >
              Inicio
            </NavLink>
            
            {renderDropdownMenu("servicios", serviciosOptions, "servicios")}
            {renderDropdownMenu("productos", productosOptions, "productos")}
            {renderDropdownMenu("capacitaciones", capacitacionesOptions, "capacitaciones")}
            
            <NavLink 
              to="/contacto" 
              className={`nav-link ${location.pathname === "/contacto" ? "active" : ""}`}
            >
              Contacto
            </NavLink>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
}

import { Stack, Typography } from '@mui/material'
import React from 'react'
import { Seccion1 } from './components/componentsSeccion1/Seccion1'
import './styles/fonts-import.css'
import { Navbar } from './components/componentsNavbar/Navbar'
import { Seccion2 } from './components/componentsSeccion2/Seccion2'
import { Seccion3 } from './components/componentsSeccion3/Seccion3'
import { Seccion4 } from './components/componentsSeccion4/Seccion4'

export const Landing = () => {
  return (
<Stack>
<Navbar/>
 <Seccion1/>
 <Seccion2/>
 <Seccion3/>
 <Seccion4/>
</Stack>
  )
}

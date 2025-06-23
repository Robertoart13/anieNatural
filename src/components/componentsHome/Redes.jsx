import { Stack, useMediaQuery } from "@mui/material"


const Redes = () => {
  const isMobile = useMediaQuery('(max-width: 600px)');
  return (
<Stack direction="row" spacing={isMobile ? 2 : 4} justifyContent="center" alignItems="center">
<a href="https://www.facebook.com/anie.natural.5" target="_blank" rel="noopener noreferrer">
    <img src="/images/facebook.png" alt="Facebook" style={{width: isMobile ? "40px" : "60px", height: isMobile ? "40px" : "60px"}} />
</a>

<a href="https://www.instagram.com/anie_natural/" target="_blank" rel="noopener noreferrer">
    <img src="/images/instagram.png" alt="Instagram" style={{width: isMobile ? "40px" : "60px", height: isMobile ? "40px" : "60px"}} />
</a>


<a href="https://www.facebook.com/anie.natural.5" target="_blank" rel="noopener noreferrer">
    <img src="/images/tiktok.png" alt="Facebook" style={{width: isMobile ? "40px" : "60px", height: isMobile ? "40px" : "60px"}} />
</a>

<a href="https://www.facebook.com/anie.natural.5" target="_blank" rel="noopener noreferrer">
    <img src="/images/youtube.png" alt="Youtube" style={{width: isMobile ? "40px" : "60px", height: isMobile ? "40px" : "60px"}}    />
</a>


</Stack>
  )
}

export default Redes

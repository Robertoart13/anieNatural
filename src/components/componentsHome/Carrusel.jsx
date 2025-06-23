import { Box, Stack, IconButton, useMediaQuery } from "@mui/material"
import { useState } from "react"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carrusel = () => {
    const images = [
        "/images/textura1.png",
        "/images/textura2.png",
        "/images/textura3.png"
    ]

    const isMobile = useMediaQuery('(max-width: 600px)');
    const isTablet = useMediaQuery('(min-width: 601px) and (max-width: 1024px)');
    const [currentImage, setCurrentImage] = useState(0);

    const handlePrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <Stack style={{ justifyContent: "center", alignItems: "center", position: "relative" }}>
            <Box 
                style={{
                    width: isMobile ? "90%" : "70%", 
                    height: isMobile ? "180px" : (isTablet ? "300px" : "600px"), 
                    backgroundImage: `url(${images[currentImage]})`,
                    backgroundSize: "cover", 
                    backgroundPosition: "center", 
                    backgroundRepeat: "no-repeat",
                    position: "relative",
                    transition: "all 0.5s ease-in-out",
                    opacity: 1
                }}
            >
                <IconButton 
                    onClick={handlePrevious}
                    style={{
                        position: "absolute",
                        left: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor:"rgba(3, 3, 3, 0.31)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "rgba(3, 3, 3, 0.31)"
                        }
                    }}
                >
                    <ArrowBackIosNewIcon style={{color: "white"}}/>
                </IconButton>

                <IconButton 
                    onClick={handleNext}
                    style={{
                        position: "absolute",
                        right: 10,
                        top: "50%",
                        transform: "translateY(-50%)",
                        backgroundColor: "rgba(3, 3, 3, 0.31)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "rgba(3, 3, 3, 0.31)"
                        }
                    }}
                >
                    <ArrowForwardIosIcon style={{color: "white"}}/>
                </IconButton>
            </Box>

            <Stack 
                direction="row" 
                spacing={1} 
                style={{ 
                    marginTop: "10px",
                    justifyContent: "center"
                }}
            >
                {images.map((_, index) => (
                    <Box
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        style={{
                            width: "10px",
                            height: "10px",
                            borderRadius: "50%",
                            backgroundColor: currentImage === index ? "#eda692" : "#e0e0e0",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                        }}
                    />
                ))}
            </Stack>
        </Stack>
    )
}

export default Carrusel

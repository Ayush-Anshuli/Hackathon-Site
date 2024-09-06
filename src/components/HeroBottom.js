import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import hero1 from "../assets/HERO-1.png"
import hero2 from "../assets/HERO-2.png"
import hero3 from "../assets/HERO-3.png"
const HeroBottom = () => {
  return (
    <>
        <Box sx={{background:"#002A3B"}}>
            <Container sx={{display:"flex",justifyContent:"space-around"}}>
                <Box display={"flex"} gap={"20px"} mt={8} mb={8}>
                    <img src={hero1} height={60}/>
                    <Box>
                        <Typography fontWeight={"bold"} fontSize={"1.5rem"}>100K+</Typography>
                        <Typography fontWeight={"bold"} fontSize={"1"}>AI model submissions</Typography>
                    </Box>
                </Box>
                    <Typography sx={{display:"flex",alignItems:"center", background:'white', height:"50px", width:"1px",marginTop:"68px"}} />
                <Box display={"flex"} gap={"20px"} mt={8} mb={8}>
                    <img src={hero2} height={60}/>
                    <Box>
                        <Typography fontWeight={"bold"} fontSize={"1.5rem"}>50K+</Typography>
                        <Typography fontWeight={"bold"} fontSize={"1rem"}>Data Scientists</Typography>
                    </Box>
                </Box>
                <Typography sx={{display:"flex",alignItems:"center", background:'white', height:"50px", width:"1px",marginTop:"68px"}} />
                <Box display={"flex"} gap={"20px"} mt={8} mb={8}>
                    <img src={hero3} height={60}/>
                    <Box>
                        <Typography fontWeight={"bold"} fontSize={"1.5rem"}>100+</Typography>
                        <Typography fontWeight={"bold"} fontSize={"1"}>AI Challenges hosted</Typography>
                    </Box>
                </Box>
            </Container>
        </Box>
    </>
  )
}

export default HeroBottom
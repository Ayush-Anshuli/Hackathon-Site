import React from 'react'
import { Box, Button, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import rocket from "../assets/rocket.png"
import HeroBottom from './HeroBottom'
const Hero = () => {
  return (
    <>
      <Box sx={{ background: "#003145" ,overflow:"hidden"}} color={"white"}>
        <Container sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }} >
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ position: "absolute", top: "28%", height: "115px", width: "9.71px", background: "#FFCE5C" }}>
            </Typography>
            <Typography width={"600px"} p={5} mt={"100px"} fontSize={"1.3rem"} >
              <h1>
                Accelerate Innovaion <br />
                with Global AI Challenges
              </h1>
              <p >
                AI Challenges at DPhi simulate real-world problems.It is a great place put your AI/Data Science skills to test on diverse datasets allowing you to foster through competitions.
              </p>
              <Link to={"/Challenge"}>
                <Button sx={{background:"white",fontWeight:"bold",color:"#003145",marginTop:"20px",marginBottom:"100px"}} >
                  Create Challenge
                </Button>
              </Link>
            </Typography>
          </Box>
          <Box sx={{ transform: "rotate(17deg)" }}>
            <Typography p={5} mt={"100px"} >
              <img src={rocket} width={"280px"} height={"300px"} />
            </Typography>
          </Box>
        </Container>
        <HeroBottom/>
      </Box>

    </>
  )
}

export default Hero
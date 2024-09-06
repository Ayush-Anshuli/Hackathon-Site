import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import note from "../assets/note.png";
import robot from "../assets/Robot.png";
import vector from "../assets/Vector.png";
import identity from "../assets/Identification.png";
const Banner = () => {
  return (
    <>
    
      <Container>
        <Typography textAlign={"center"} mt={10}  fontSize={"35px"} fontWeight={"bold"}>
          Why Participate in <span style={{ color: "#599e60" }}>AI Challenges?</span>
        </Typography>
      </Container>

      
      <Container sx={{ mt: 5,mb:10 }}>
        <Grid container spacing={4} justifyContent="center">
          
          <Grid item xs={12} md={6}>
            <Box
              height={"200px"}
              bgcolor={"#f8f9fd"}
              borderRadius={"20px"}
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              
            >
              <img src={note} alt="note" height={50} width={45} style={{marginBottom:"10px"}} />
              <Typography fontSize={"1.7rem"} fontWeight={"bold"} mb={2} >Prove your skills</Typography>
              <Typography color='#64607d'>Gain susbstantial experience by solving real-world problems and pit against others to come up with innovative solutions.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              height={"200px"}
              bgcolor={"#f8f9fd"}
              borderRadius={"20px"}
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              
            >
              <img src={vector} alt="note" height={35} width={40} style={{marginBottom:"10px"}} />
              <Typography fontSize={"1.7rem"} fontWeight={"bold"} mb={2} >Learn from community</Typography>
              <Typography color='#64607d'>One can look and analyze the solutions submitted by the other Data Scientists in the community and learn from them</Typography>
            </Box>
          </Grid>

          
          <Grid item xs={12} md={6}>
            <Box
              height={"200px"}
              bgcolor={"#f8f9fd"}
              borderRadius={"20px"}
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              
            >
              <img src={robot} alt="note" height={50} width={45} style={{marginBottom:"10px"}}/>
              <Typography fontSize={"1.7rem"} fontWeight={"bold"} mb={2}>Challenge yourself</Typography>
              <Typography color='#64607d'>There is nothing for you to lose by participating in a challenge. You can fail safe,learn ot of the entire experience and bounce back harder.</Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              height={"200px"}
              bgcolor={"#f8f9fd"}
              borderRadius={"20px"}
              p={5}
              display="flex"
              flexDirection="column"
              justifyContent="center"
            >
              <img src={identity} height={50} width={45}  style={{marginBottom:"10px"}}/>
              <Typography fontSize={"1.7rem"} fontWeight={"bold"} mb={2}>Earn recognition</Typography>
              <Typography color='#64607d'>You will stand out from the crowd if you do well in AI Challenge,it not only help you shine in the community but also earns rewards.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Banner;

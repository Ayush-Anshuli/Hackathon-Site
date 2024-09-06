import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const DetailPage = () => {
  const { id } = useParams(); 
  const [challenge, setChallenge] = useState(null);
  const navigate = useNavigate(); 

  useEffect(() => {

    const storedData = JSON.parse(localStorage.getItem('challengeData'));
    
    console.log('Stored Data:', storedData); 
    
    if (storedData) {

      const foundChallenge = storedData.find(ch => String(ch.id) === String(id));
      console.log('Found Challenge:', foundChallenge); 
      
      setChallenge(foundChallenge);
    }
  }, [id]);

  const handleDelete = () => {

    const storedData = JSON.parse(localStorage.getItem('challengeData'));
    
    console.log('Stored Data before Delete:', storedData); 

    if (storedData) {

      const updatedData = storedData.filter(ch => String(ch.id) !== String(id));
      
      console.log('Updated Data:', updatedData); 
      
      localStorage.setItem('challengeData', JSON.stringify(updatedData));
      
      navigate('/');
    }
  };

  if (!challenge) {
    return <Typography>Loading...</Typography>;
  }

  const { challengeName, description, startDate, level } = challenge;
  const start = new Date(startDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

  return (
    <>
      <Box>
        <Box bgcolor={"#002A3B"} color={"white"} p={10}>
          <Typography bgcolor={"#ffce5c"} width={"40%"} p={2} borderRadius={"10px"} color='black' fontWeight={"bold"} fontSize={"1rem"}>
            Starts on {start}
          </Typography>

          <Typography mt={2} mb={2} fontSize={"2rem"}>
            {challengeName}
          </Typography>

          <Typography>
            Identify the class to which each belongs to
          </Typography>
          <Typography>
            <button style={{ padding: "10px", marginTop: "10px", paddingLeft: "15px", paddingRight: "15px", cursor: "pointer" }}>
              {level.charAt(0).toUpperCase() + level.slice(1)}
            </button>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between" }} m={5}>
          <Box>
            <Typography fontWeight={"bold"}>
              Overview
            </Typography>
            <Typography width={"80px"} height={"4px"} bgcolor={"#599e60"} />
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            <Box>
              <Typography>
                <Link to={`/Challenge`} style={{ textDecoration: 'none' }}>
                  <Button>Edit</Button>
                </Link>
              </Typography>
            </Box>
            <Box>
              <button 
                onClick={handleDelete}
                style={{ color: "red", outline: "none", border: "none", padding: "5px", fontWeight: "bold", marginTop: "5px", cursor: "pointer" }}
              >
                Delete
              </button>
            </Box>
          </Box>
        </Box>

        <Box m={5}>
          <Typography>
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default DetailPage;

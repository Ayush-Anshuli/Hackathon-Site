import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, CardActionArea, Button, Box, Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const CardDetails = ({ filters }) => {
  const [challengeData, setChallengeData] = useState([]);
  const [timers, setTimers] = useState({});

  // Fetch data from localStorage when the component mounts
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('challengeData'));
    console.log('Stored Data:', storedData); // Debugging line
    if (storedData) {
      setChallengeData(storedData); // Set the challengeData array
    }
  }, []);

  useEffect(() => {
    // Set interval to update the timers every second
    const timerInterval = setInterval(() => {
      const newTimers = {};

      challengeData.forEach((challenge) => {
        const startTime = new Date(challenge.startDate).getTime();
        const endTime = new Date(challenge.endDate).getTime();
        const now = new Date().getTime();
        const timeToStart = startTime - now;
        const timeToEnd = endTime - now;

        if (timeToEnd < 0) {
          newTimers[challenge.id] = 'Past';
        } else if (timeToStart <= 0 && timeToEnd >= 0) {
          newTimers[challenge.id] = 'Active';
        } else if (timeToStart > 0) {
          const days = Math.floor(timeToStart / (1000 * 60 * 60 * 24));
          const hours = Math.floor((timeToStart % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((timeToStart % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((timeToStart % (1000 * 60)) / 1000);

          newTimers[challenge.id] = `Starts in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      });

      setTimers(newTimers);
    }, 1000);

    return () => clearInterval(timerInterval); 
  }, [challengeData]);

  
  const isFilterApplied = 
    filters.status.all || 
    filters.status.active || 
    filters.status.upcoming || 
    filters.status.past || 
    filters.level.easy || 
    filters.level.medium || 
    filters.level.hard;

  
  const filteredChallenges = isFilterApplied ? challengeData.filter(challenge => {
    const { all, active, upcoming, past } = filters.status;
    const { easy, medium, hard } = filters.level;

    const status = timers[challenge.id];

    
    const isStatusMatch = 
      all || 
      (status === 'Active' && active) || 
      (status && status.startsWith('Starts in') && upcoming) || 
      (status === 'Past' && past) ;

    // Check if challenge level matches the filters
    const isLevelMatch = 
      (easy && challenge.level === 'easy') || 
      (medium && challenge.level === 'medium') || 
      (hard && challenge.level === 'hard') || 
      (!easy && !medium && !hard);

    return isStatusMatch && isLevelMatch;
  }) : challengeData;

  console.log('Filtered Challenges:', filteredChallenges); 

  return (
    <Box>
      <Container>
        {filteredChallenges.length > 0 ? (
          <Grid container spacing={4}>
            {filteredChallenges.map((challenge) => (
              <Grid item xs={12} sm={6} md={4} key={challenge.id}>
                <Card sx={{ marginBottom: "20px" }}>
                  <CardActionArea sx={{ marginTop: "0px" }}>
                    <CardMedia
                      component="img"
                      height={"200px"}
                      image={challenge.image || '/static/images/cards/contemplative-reptile.jpg'}
                      alt={challenge.challengeName}
                      sx={{ marginBottom: "40px" }}
                    />
                    <CardContent>
                      <Typography gutterBottom textAlign={"center"} variant="h5" component="div">
                        {challenge.challengeName}
                      </Typography>
                      <Typography variant="body2" textAlign={"center"} sx={{ color: 'text.secondary', marginTop: '10px' }}>
                        {timers[challenge.id] || 'Loading...'}
                      </Typography>
                      <Link to={`/DetailPage/${challenge.id}`} style={{ textDecoration: 'none' }}>
                        <Button
                          variant="contained"
                          sx={{ marginTop: '20px', background: "#599e60", marginLeft: "100px" }}
                        >
                          Participate
                        </Button>
                      </Link>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography>No challenge data found.</Typography>
        )}
      </Container>
    </Box>
  );
};

export default CardDetails;

import React, { useState } from 'react';
import { Box, TextareaAutosize, TextField, Typography, Button, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { Link } from 'react-router-dom';

const Challenge = () => {
  const [image, setImage] = useState('');
  const [challengeName, setChallengeName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [level, setLevel] = useState('');
  const [description, setDescription] = useState('');

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLevelChange = (event) => {
    setLevel(event.target.value);
  };

  const handleSaveChallenge = () => {
    const existingChallenges = JSON.parse(localStorage.getItem('challengeData')) || [];

    if (!Array.isArray(existingChallenges)) {
      console.error("Invalid format in localStorage. Initializing as an empty array.");
      localStorage.setItem('challengeData', JSON.stringify([]));
    }

    const newChallenge = {
      challengeName,
      startDate,
      endDate,
      level,
      description,
      image,
      id: existingChallenges.length + 1  
    };

    existingChallenges.push(newChallenge);

    localStorage.setItem('challengeData', JSON.stringify(existingChallenges));

    setChallengeName('');
    setStartDate('');
    setEndDate('');
    setLevel('');
    setDescription('');
    setImage('');

    alert("Challenge saved successfully to local storage!");
  };

  return (
    <>
      <Box>
        <Typography fontWeight={"bold"} fontSize={"1.8rem"} p={8} bgcolor={"#f8f9fd"}>
          Challenge Details
        </Typography>
      </Box>

      <Box mt={5} ml={8} sx={{ display: "flex", flexDirection: "column", gap: "50px" }}>
        <Box>
          <Typography>Challenge Name</Typography>
          <TextField 
            style={{ width: "30%" }} 
            value={challengeName}
            onChange={(e) => setChallengeName(e.target.value)} 
          />
        </Box>

        <Box>
          <Typography>Start Date</Typography>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            style={{ width: "30%" }}
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </Box>

        <Box>
          <Typography>End Date</Typography>
          <TextField
            type="date"
            InputLabelProps={{ shrink: true }}
            style={{ width: "30%" }}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </Box>

        <Box>
          <Typography>Description</Typography>
          <TextareaAutosize
            minRows={5}
            style={{ width: "50%", padding: "20px", borderRadius: "8px", borderColor: "#ccc", fontSize: "1rem" }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Box>

        <Box>
          <Typography>Upload Image</Typography>
          <Button
            variant="contained"
            component="label"
            sx={{ mt: 2, backgroundColor: "#f4f4f4", color: "#666666", width: "200px", height: "50px" }}
          >
            Upload
            <CloudUploadIcon style={{ marginLeft: "10px" }} />
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Button>

          {image && (
            <Box mt={2}>
              <img src={image} alt="Uploaded" style={{ width: '200px', height: 'auto', borderRadius: '8px' }} />
            </Box>
          )}
        </Box>

        <Box>
          <Typography>Level</Typography>
          <FormControl sx={{ width: "30%" }}>
            <InputLabel id="level-select-label">Select Level</InputLabel>
            <Select
              labelId="level-select-label"
              value={level}
              label="Select Level"
              onChange={handleLevelChange}
            >
              <MenuItem value={"easy"}>Easy</MenuItem>
              <MenuItem value={"medium"}>Medium</MenuItem>
              <MenuItem value={"hard"}>Hard</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box>
          <Link to={"/"}>
            <button
              onClick={handleSaveChallenge}
              style={{
                border: "none",
                outline: "none",
                background: "#599e60",
                color: "white",
                cursor: "pointer",
                borderRadius: "5px",
                padding: "10px 15px",
                fontSize: "1.25rem",
                marginBottom: "20px"
              }}
            >
              Create Challenge
            </button>      
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Challenge;

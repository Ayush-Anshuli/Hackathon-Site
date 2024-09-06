import React, { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Typography,
  Button,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Divider,
  Chip,
} from '@mui/material';
import CardDetails from './CardDetails';

const Search = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [statusFilter, setStatusFilter] = useState({
    all: false,
    active: false,
    upcoming: false,
    past: false,
  });

  const [levelFilter, setLevelFilter] = useState({
    easy: false,
    medium: false,
    hard: false,
  });

  const [appliedFilters, setAppliedFilters] = useState([]);

  const handleFilterClick = () => {
    setFilterOpen(!filterOpen);
  };

  const handleStatusChange = (event) => {
    const { name, checked } = event.target;
    setStatusFilter((prev) => ({ ...prev, [name]: checked }));

    if (checked) {
      setAppliedFilters((prev) => [...prev, name]);
    } else {
      setAppliedFilters((prev) => prev.filter((filter) => filter !== name));
    }
  };

  const handleLevelChange = (event) => {
    const { name, checked } = event.target;
    setLevelFilter((prev) => ({ ...prev, [name]: checked }));

    if (checked) {
      setAppliedFilters((prev) => [...prev, name]);
    } else {
      setAppliedFilters((prev) => prev.filter((filter) => filter !== name));
    }
  };

  const handleRemoveFilter = (filterToRemove) => {
    setAppliedFilters((prev) => prev.filter((filter) => filter !== filterToRemove));

    if (statusFilter.hasOwnProperty(filterToRemove)) {
      setStatusFilter((prev) => ({ ...prev, [filterToRemove]: false }));
    }
    if (levelFilter.hasOwnProperty(filterToRemove)) {
      setLevelFilter((prev) => ({ ...prev, [filterToRemove]: false }));
    }
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#002A3B", paddingY: 8 }}>
        <Container sx={{ marginBottom: '5px', textAlign: "center", position: "relative" }}>
          <Typography fontSize={"2rem"} fontWeight={"bold"} color='white' mb={3}>
            Explore Challenges
          </Typography>

          <Box sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            borderRadius: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            maxWidth: "100%",
            margin: "0 auto",
            padding: 2,
          }}>
            <TextField
              fullWidth
              label="Search"
              id="fullWidth"
              InputProps={{
                style: {
                  borderRadius: '8px',
                  backgroundColor: "white"
                }
              }}
            />

            <Button
              variant="contained"
              sx={{ backgroundColor: "white", color: "#002A3B", padding: "10px 20px", borderRadius: "8px" }}
              onClick={handleFilterClick}
            >
              Filter
            </Button>
          </Box>

          <Box mt={2} sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            {appliedFilters.map((filter, index) => (
              <Chip
                key={index}
                label={filter}
                onDelete={() => handleRemoveFilter(filter)}
                sx={{ margin: '5px', background: "#7a8f9a", color: "white", fontSize: "1rem" }}
              />
            ))}
          </Box>

          {filterOpen && (
            <Box
              sx={{
                position: "absolute",
                top: "150px",
                right: "0",
                width: "250px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                padding: 3,
                zIndex: 1000,
              }}
            >
              <Divider sx={{ marginBottom: 2 }} />
              <Typography variant="subtitle1" fontWeight={"bold"} textAlign={"left"}>
                Status
              </Typography>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox checked={statusFilter.all} onChange={handleStatusChange} name="all" />}
                  label="All"
                />
                <FormControlLabel
                  control={<Checkbox checked={statusFilter.active} onChange={handleStatusChange} name="active" />}
                  label="Active"
                />
                <FormControlLabel
                  control={<Checkbox checked={statusFilter.upcoming} onChange={handleStatusChange} name="upcoming" />}
                  label="Upcoming"
                />
                <FormControlLabel
                  control={<Checkbox checked={statusFilter.past} onChange={handleStatusChange} name="past" />}
                  label="Past"
                />
              </FormGroup>
            </Box>
          )}
        </Container>
      </Box>
      <Box bgcolor={"#003145"}>
        <CardDetails filters={{ status: statusFilter, level: levelFilter }} />
      </Box>
    </>
  );
};

export default Search;

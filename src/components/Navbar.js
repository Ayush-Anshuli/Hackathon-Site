import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import logo from "../assets/logo.png"
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar =() => {
  
  return (
      <>
        <Typography p={2} ml={5} >
          <Link to={"/"}>
            <img src={logo} height={50} />
          </Link>
        </Typography>
        
      </>
  );
}
export default Navbar;

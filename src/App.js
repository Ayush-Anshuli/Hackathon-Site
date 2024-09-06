import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import Home from './pages/Home';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
      {/* <Container> */}
        <Navbar/>
        <Outlet/>
      {/* </Container> */}
    </>
  );
}

export default App;

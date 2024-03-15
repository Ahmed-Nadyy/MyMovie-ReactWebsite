import React from 'react'
// import Home from '../../Components/Home/Home';
// import Movies from './Components/Movies/Movies';
// import Tv from './Components/Tv/Tv';

// import { Outlet } from 'react-router-dom';
import HeaderRegisteration from '../../Components/Navbar/HeaderRegisteration';
// import Footer from '../../Components/Navbar/Footer';
import Register from '../../Components/Register/Register';

export default function SystemLayout() {
  return (
    <>
      <HeaderRegisteration />
      <Register />
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  )
}

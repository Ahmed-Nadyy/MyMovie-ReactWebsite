import React from 'react'
// import Home from '../../Components/Home/Home';
// import Movies from './Components/Movies/Movies';
// import Tv from './Components/Tv/Tv';

// import { Outlet } from 'react-router-dom';
import HeaderLogin from '../../Components/Navbar/HeaderLogin';
// import Footer from '../../Components/Navbar/Footer';
import Login from '../../Components/Login/Login';

export default function SystemLayout() {
  return (
    <>
      <HeaderLogin />
      <Login />
      {/* <Outlet /> */}
      {/* <Footer /> */}
    </>
  )
}

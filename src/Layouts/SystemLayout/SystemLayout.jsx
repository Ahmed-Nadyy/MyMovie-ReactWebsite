import React from 'react'
// import Home from '../../Components/Home/Home';
// import Movies from './Components/Movies/Movies';
// import Tv from './Components/Tv/Tv';

import { Outlet } from 'react-router-dom';
import Header from '../../Components/Navbar/Header';
import Footer from '../../Components/Navbar/Footer';

export default function SystemLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

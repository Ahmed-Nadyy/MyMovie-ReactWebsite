import './App.css';
import { createBrowserRouter,RouterProvider  } from 'react-router-dom';
import SystemLayout from './Layouts/SystemLayout/SystemLayout';
import { children , React } from 'react';
import Home from './Components/Home/Home';
import Tv from './Components/Tv/Tv';
import Movies from './Components/Movies/Movies';
import NotFound from './Components/NotFound/NotFound';
import { Offline,Online } from 'react-detect-offline';
import Off from './Components/Home/Offline/Off';
import ItemDetails from './Components/ItemDetails/ItemDetails';
import LoginLayout from './Layouts/LoginLayout/LoginLayout';
import RegisterationLayout from './Layouts/RegisterationLayout/RegisterationLayout';

function App() {
  
 
  const routes = createBrowserRouter([{
     path:'/',element : <SystemLayout />,
     children : [
     {index:true , element : <Home />},
     {path:'home' , element : <Home />},
     {path:'MyMovie-ReactWebsite' , element : <Home />},
     {path:'tv' , element : <Tv />},
     {path:'movies' , element : <Movies />},
     {path:'itemDetails/:id/:media' , element : <ItemDetails />},
     {path:'*' , element : <NotFound />}
    ],
  },
  {
    path:'login',element : <LoginLayout />,
  },
  {
    path:'register',element : <RegisterationLayout />,
  }

]);

  return (
    <>
    <Online><RouterProvider router={routes} /></Online>
    <Offline><Off /></Offline>
    </>
  );
}

export default App;

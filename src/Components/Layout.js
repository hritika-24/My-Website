import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from './Footer';
import Header from './Header';

function Layout ({children})  {
    const location=useLocation();

  return (
    <div>
        <Header/>
        {children}
        {location.pathname!=='/form'&&<Footer/>}

    </div>
  );
}

export default Layout
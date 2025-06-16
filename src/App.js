import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './Components/Header'
import Slider from './Components/Slider';
import Form from './Components/Form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Layout from './Components/Layout';
import ModularKitchen from './pages/Design Gallery/ModularKitchen';
import Wardrobe from './pages/Design Gallery/Wardrobe';

const App = () => {
  
  return (
    <div>
        {/* <Header/> */}

        <Routes>
          <Route path="/" element={<Layout><Home/></Layout>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path='/modularkitchen' element={<Layout><ModularKitchen/></Layout>}/>
          <Route path='/wardrobe' element={<Layout><Wardrobe/></Layout>}/>
        </Routes>
        {/* <Footer/> */}
    </div>
  )
}

export default App
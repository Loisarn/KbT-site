import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navb from './components/Navbar.jsx';
import Home from './components/pages/Home.jsx';
import Contact from './components/pages/Contact';
import Gallery from './components/pages/Gallery';
import FaqPage from './components/pages/FAQ.js';
import AfterCare from './components/pages/AfterCare.jsx';
import Footer from './components/Footer.js';
import "./app.css";
import 'antd/dist/antd.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <>
      <Navb/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="gallery" element={<Gallery/>} />
      <Route path="contact" element={<Contact />} />
      <Route path="faq" element={<FaqPage />} />
      <Route path="aftercare" element={<AfterCare />} />
</Routes>
<Footer />
</>
  )
}


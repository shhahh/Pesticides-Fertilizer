import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import HoneyCollection from './pages/HoneyCollection';
import FarmersCorner from './pages/FarmersCorner';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-stone-950">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<OurStory />} />
        <Route path="/honey" element={<HoneyCollection />} />
        <Route path="/farmers" element={<FarmersCorner />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Home } from './pages/Home';
import { Artist } from './pages/Artist';
import { Booking } from './pages/Booking';
import { Projects } from './pages/Projects';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="artist" element={<Artist />} />
          <Route path="booking" element={<Booking />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

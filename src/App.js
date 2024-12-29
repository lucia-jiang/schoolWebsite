import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Arts from './pages/Arts/Arts';
import Chinese from './pages/Chinese';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/arts" element={<Arts />} />
                <Route path="/chinese" element={<Chinese />} />
                <Route path="/teachers" element={<Teachers />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;

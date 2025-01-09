import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Chinese from './pages/Chinese';
import Teachers from './pages/Teachers';
import Contact from './pages/Contact';
import Footer from "./components/common/Footer";
import Music from "./pages/Arts/Music";
import AcademicSupport from "./pages/AcademicSupport";

function App() {
    return (
        <Router basename="/schoolWebsite">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/chinese" element={<Chinese/>}/>
                <Route path="/teachers" element={<Teachers/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/music" element={<Music/>}/>
                <Route path="/academicSupport" element={<AcademicSupport/>}/>
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;

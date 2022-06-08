// React Install
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Css Files
// import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './sass/main-rtl.scss';
import './sass/main-ltr.scss';
import 'animate.css';

// Import Icons
import 'font-awesome/css/font-awesome.min.css';
import 'flag-icons/css/flag-icons.min.css';

// Pages
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Chef from './pages/Chef';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Reservation from './pages/Reservation';
import Footer from './layout/Footer';

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/chef" element={<Chef />} />
                    <Route path="/reservation" element={<Reservation />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
}

export default App;

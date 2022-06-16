import logo from './logo.svg';
import NavbarComp from './components/navbarcomp/NavbarComp';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Art from './components/art/Art';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import './app.scss';
import Landingpage from './components/landingpage/Landingpage';
import { Routes, Route } from 'react-router-dom';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

function App() {
  return (
    <div className="app">
      <NavbarComp />
      <Footer />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/art" element={<Art />} />
      </Routes>
    </div>
  );
}

export default App;

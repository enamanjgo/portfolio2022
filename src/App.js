import logo from './logo.svg';
import NavbarComp from './components/navbarcomp/NavbarComp';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Art from './components/art/Art';
import Home from './components/home/Home';
import Footer from './components/Footer/Footer';
import Tunely from './components/Tunely/Tunely';
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
        <Route path="/tunely" element={<Tunely />} />
      </Routes>

      <div className="container ">
        <div className="row  text-center ">
          <span class="">
            {' '}
            <i class="fa-brands fa-linkedin  px-1"> </i>
            <i class="fa-brands fa-github px-1"></i>
            <i class="fa-solid fa-envelope px-1"></i>
            <i class="fa-brands fa-instagram px-1"></i>
          </span>
        </div>
        <div className="row">
          <p className="text-light fw-light text-center">
            {' '}
            © 2022 Designed and developed by Ena Manjgo
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;

import './home.scss';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';
import Landingpage from '../landingpage/Landingpage';
import Projects from '../projects/Projects';
import Intrographic from '../intrographic/Intrographic';

import React from 'react';

function Home() {
  return (
    <div>
      <Intrographic />
      <Landingpage />
      <Projects />
    </div>
  );
}

export default Home;

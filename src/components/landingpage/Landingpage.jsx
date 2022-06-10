import './landingpage.scss';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

import React, { Component } from 'react';

export default class Landingpage extends Component {
  render() {
    return (
      <div class="container">
        <br />
        <br />
        <section id="intro">
          <div className="row">
            <img
              src="https://i.imgur.com/byPLD02.png"
              class="img-fluid w-10"
              alt="Responsive image"
            ></img>
          </div>
          <div class="row">
            <div class="p-5 text-center fw-light">
              <h3 class="mb-3 overflow-hidden fw-light">Hi, I'm Ena.</h3>
              <h5 class="mb-3 overflow-hidden fw-light">
                I'm passionate about designing and managing products that make
                an impact.
              </h5>
              <br />
              <h5 class="mb-3 overflow-hidden fw-light">See my work</h5>
              <a href="#projects">
                <i class="fa-solid fa-angles-down text-center  "></i>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" class="bg-light mt-5">
          <div class="row">
            <div class="container margin-auto">
              <div class="card">
                <img src="https://i.imgur.com/3PPg636.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

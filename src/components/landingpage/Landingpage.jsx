import './landingpage.scss';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

import React, { Component } from 'react';

export default class Landingpage extends Component {
  render() {
    return (
      <div class="container">
        <section id="intro">
          <div class="row">
            <div class="p-5  fw-light text-center">
              <br />
              <br />
              <h3 class=" overflow-hidden fw-light text-light">Hi, I'm </h3>
              <div className="row">
                <img
                  class="align-items-center ps-5 "
                  src="https://i.imgur.com/d25yYCo.gif"
                  alt=""
                />
              </div>

              <h5 id="title" class=" overflow-hidden fw-light text-light">
                Product Manager & Designer
              </h5>
              <h5 class="  fw-light text-light">
                UWaterloo Systems Design Engineering '25
              </h5>
              <br />
              <h5 class=" overflow-hidden fw-light text-light pb-2">
                See my work{'    '}
              </h5>
              <a href="#projects">
                <i
                  id="arrowdown"
                  class="fa-solid fa-chevron-down  text-center text-light "
                ></i>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" class=" m-5 p-2">
          <br />
          <br />
          <br />
          <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            <div id="project1" class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  id="cover1"
                  class="card-img-top bg-image hover-overlay ripple shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    How can we make it easier to discover new music and share it
                    with friends?
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href=""
                      class="text-decoration-none fw-light text-light"
                    >
                      See Tunely <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  class="card-img-top"
                  id="image1"
                  alt="Palm Springs Road"
                />

                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    How can we make it easier to discover new music and share it
                    with friends?
                    <br />
                    <br />
                    <a href="">See Tunely</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row py-4 row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            <div id="project1" class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  id="cover1"
                  class="card-img-top bg-image hover-overlay ripple shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    How can we make it easier to discover new music and share it
                    with friends?
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href=""
                      class="text-decoration-none fw-light text-light"
                    >
                      See Tunely <i class="fa-solid fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  class="card-img-top"
                  id="image1"
                  alt="Palm Springs Road"
                />

                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    How can we make it easier to discover new music and share it
                    with friends?
                    <br />
                    <br />
                    <a href="">See Tunely</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

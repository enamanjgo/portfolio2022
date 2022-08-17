import './landingpage.scss';
import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

import React, { Component } from 'react';

export default class Landingpage extends Component {
  render() {
    return (
      <div class="container overflow-hidden">
        <section id="intro">
          <div class="row">
            <div class="p-5  fw-light text-center">
              <br />
              <br />
              <br />

              <h4 id="title" class="title overflow-hidden fw-light text-light">
                Nice to meet you! I'm{' '}
              </h4>
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
              <h5 id="title" class="  fw-light text-light">
                UWaterloo Systems Design Engineering '25
              </h5>
              <br />
              <h5 id="title" class=" overflow-hidden fw-light text-light pb-2">
                See my work{'    '}
              </h5>
              <a href="#projects">
                <i
                  id="arrowdown"
                  class=" fa-2x fa-solid fa-chevron-down fa-beat-fade --fa-animation-duration 2s text-center text-light "
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
                  src="https://i.imgur.com/YO1N7WU.png"
                  id="cover1"
                  class="card-img-top bg-image hover-overlay ripple shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1" class="">
                    How can we make it easier to discover new music and share it
                    with friends?
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href="/Tunely"
                      class="text-decoration-none fst-italic fw-light text-dark"
                    >
                      See Tunely, a mobile app case study{' '}
                      <i class=" text-dark text-justify fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://i.imgur.com/crviJ6N.png"
                  class="card-img-top"
                  id="cover1"
                  alt="Palm Springs Road"
                />

                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1">
                    How can we communicate engineering class statistics in a
                    meaningful way?
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href="/tunely"
                      class="text-decoration-none fw-light text-dark fst-italic"
                    >
                      See SYDE Class Profile, a website case study{' '}
                      <i class=" text-dark text-justify fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*comment here
          <div class="row py-4 row-cols-1 row-cols-md-1 row-cols-lg-2 g-4">
            <div id="project1" class="col">
              <div class="card border-0">
                <img
                  src="https://i.imgur.com/YO1N7WU.png"
                  id="cover1"
                  class="card-img-top bg-image hover-overlay ripple shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1" class="">
                    How can we improve the gender disparity in weightlifting?
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href="/tunely"
                      class="text-decoration-none fst-italic fw-light text-dark"
                    >
                      See Lifter, a mobile app case study{' '}
                      <i class=" text-dark text-justify fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="project1" class="col">
              <div class="card border-0">
                <img
                  src="https://i.imgur.com/YO1N7WU.png"
                  id="cover1"
                  class="card-img-top bg-image hover-overlay ripple shadow-1-strong rounded"
                  alt="Hollywood Sign on The Hill"
                />
                <div id="overlay1" className="overlay1">
                  <div id="text1" className="text1" class="">
                    How can we improve the gender disparity in weightlifting?
                    <br />
                    <br />
                    <a
                      id="projectname"
                      href="/tunely"
                      class="text-decoration-none fst-italic fw-light text-dark"
                    >
                      See Lifter, a mobile app case study{' '}
                      <i class=" text-dark text-justify fa-solid fa-up-right-from-square"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          */}
        </section>
      </div>
    );
  }
}

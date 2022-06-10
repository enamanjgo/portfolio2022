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
              <br />
              <h3 class=" overflow-hidden fw-light text-light">Hi, I'm </h3>
              <div className="row">
                <img
                  class="align-items-center ps-5 "
                  src="https://i.imgur.com/d25yYCo.gif"
                  alt=""
                />
              </div>

              <h5 class=" overflow-hidden fw-light text-light">
                Product Manager & Designer
              </h5>
              <h5 class=" overflow-hidden fw-light text-light">
                UWaterloo Systems Design Engineering '25
              </h5>
              <br />
              <h5 class=" overflow-hidden fw-light text-light pb-2">
                See my work{'    '}
              </h5>
              <a href="#projects">
                <i class="fa-solid fa-angles-down text-center text-light "></i>
              </a>
            </div>
          </div>
        </section>

        <section id="projects" class=" m-5 p-5">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                  class="card-img-top"
                  alt="Hollywood Sign on The Hill"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                  class="card-img-top"
                  alt="Palm Springs Road"
                />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                  class="card-img-top"
                  alt="Los Angeles Skyscrapers"
                />
                <div class="card-body">
                  <h5 class="card-title overflow-hidden">Card title</h5>
                  <p class="card-text">
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content.
                  </p>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card border-0">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                  class="card-img-top"
                  alt="Skyscrapers"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

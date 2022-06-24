import './art.scss';
import React from 'react';
import './art.scss';

import { Component } from 'react';

export default function Art() {
  return (
    <div>
      <br />
      <br />
      <br />

      <div class="container text-light fw-light">
        <div className="row text-light fw-light">
          <h5 class="text-light fw-light">
            In my spare time, I enjoy making visual art. I've featured some of
            my favourite pieces below.
          </h5>
          <p>Tools: Adobe Photoshop, Illustrator, Procreate</p>
        </div>

        <div class="row d-flex flex-wrap align-items-center">
          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://i.imgur.com/5pDZtP2.png" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://i.imgur.com/Q3wTBWz.png" alt="" />
          </div>

          <div class="col-12 col-md-6 col-lg-6 px-5">
            <img src="https://i.imgur.com/RUKXdoo.png" alt="" />
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://i.imgur.com/56G6soI.jpg" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://i.imgur.com/yJV1Hj1.jpg" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <img src="https://i.imgur.com/SAxKr0c.png" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <img src="https://i.imgur.com/vaX6JZf.png" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <img src="https://i.imgur.com/apVa0Ej.png" alt="" />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <img src="https://i.imgur.com/7eS4STP.jpg" alt="" />
          </div>

          <div class="col-12 col-md-6 col-lg-4">
            <img src="https://i.imgur.com/V6lYg33.png" alt="" />
          </div>
          <div class="col-12 col-md-6 col-lg-4">
            <img src="https://i.imgur.com/3PPg636.jpg" alt="" />
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://i.imgur.com/9sHJEg8.jpg" alt="" />
          </div>

          <div class="col-12 col-md-6 col-lg-6">
            <img src="https://i.imgur.com/eyGzTG6.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

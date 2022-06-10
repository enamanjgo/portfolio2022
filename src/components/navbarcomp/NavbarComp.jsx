import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import React, { Component } from 'react';

export default class NavbarComp extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light ">
        <div class="container-fluid">
          <a class="navbar-brand" href="/landingpage">
            EM
          </a>
          <button
            class="navbar-toggler my-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link" href="/landingpage">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/About">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/Art">
                  Art
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

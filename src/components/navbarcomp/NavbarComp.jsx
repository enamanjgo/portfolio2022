import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

import React, { Component } from 'react';

export default class NavbarComp extends Component {
  render() {
    return (
      <nav
        id="nav"
        class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark "
      >
        <div class="container-fluid">
          <a id="title" class="navbar-brand" href="/#projects">
            Ena Manjgo
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
                <a id="title" class="nav-link" href="/">
                  Home
                </a>
              </li>

              <li class="nav-item">
                <a id="title" class="nav-link" href="/About">
                  About
                </a>
              </li>

              <li class="nav-item">
                <a id="title" class="nav-link" href="/Graphics">
                  Graphics
                </a>
              </li>

              <li class="nav-item">
                <a
                  id="title"
                  class="nav-link"
                  href="https://drive.google.com/file/d/1zwXtsTxeCFrNF8BhIBAQV5u5J9IeoPY0/view?usp=sharing"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

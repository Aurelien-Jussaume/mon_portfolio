import photo from "../misc/photo.png";
import "../App.css";
import { Link, animateScroll as scroll } from "react-scroll";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
        <nav
          className="navbar navbar-expand-lg navbar-dark bg-dark position-fixed"
          style={{ width: "100%" }}
        >
          <div className="container container-fluid">
            <a
              class="navbar-brand d-inline-block align-text-middle text-white-50"
              style={{ fontSize: 30 }}
              href="#"
            >
              <img src={photo} width="55" className="mr-2 rounded" alt="..." />
              Aurélien Jussaume
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-lg-end"
              id="navbarSupportedContent"
            >
              <ul className="nav navbar-nav ml-auto mb-lg-0">
                <li className="nav-item">
                  <Link
                    activeClass="active"
                    to="accueil"
                    spy={true}
                    smooth={true}
                    offset={-200}
                    duration={250}
                  >
                    <a
                      className="nav-link ml-2"
                      aria-current="page"
                      href="accueil"
                    >
                      Accueil
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link
                    activeClass="active"
                    to="profil"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={250}
                  >
                    <a className="nav-link" href="profil">
                      Qui suis-je ?
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link
                    activeClass="active"
                    to="formation"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={250}
                  >
                    <a className="nav-link" href="formation">
                      Formation
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link
                    activeClass="active"
                    to="skills"
                    spy={true}
                    smooth={true}
                    offset={-95}
                    duration={250}
                  >
                    <a className="nav-link" href="skills">
                      Skills
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link
                    activeClass="active"
                    to="projet"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={250}
                  >
                    <a className="nav-link" href="skills">
                      Projets
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link
                    activeClass="active"
                    to="experience"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={250}
                  >
                    <a className="nav-link" href="experience">
                      Expérience
                    </a>
                  </Link>
                </li>
                <li className="nav-item ml-2">
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={250}
                  >
                    <a className="nav-link" href="contact">
                      Contact
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    );
  }
}

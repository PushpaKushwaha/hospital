import React from "react";
import Head from "./Head";
import { Link } from "react-router-dom";
import './header.css'
function Header() {
  return (
    <>
      <Head />
      <nav className="navbar navbar-expand-lg  bg-body-tertiary sticky-top">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img
              className="image"
              src="../img/logo.webp"
              alt=""
            />
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className="nav-link" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  aria-current="page"
                  to="/about"
                >
                  ABOUT US
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/service">
                  SERVICES
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/department">
                  DEPARTMENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/team">
                  MEDICAL TEAM
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">
                  LATEST NEWS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;

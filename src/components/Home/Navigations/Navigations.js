import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BrandIcon from '../BrandIcon/BrandIcon';
import './Navigations.css';

const Navigations = () => {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="p-0 m-0 navbar-style">
      {/* col-3 */}
      <div className="p-0 m-0 d-flex align-items-center">
        <Link to="/" className="header-brand px-3">
          <Navbar.Brand className="p-0 m-0">
            <BrandIcon></BrandIcon>
          </Navbar.Brand>
        </Link>
      </div>
      <div className="pr-3">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="border-0" />
      </div>
      <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
        <Nav className="pr-3">
          <Link to="/" className="nav-style">Features</Link>
          <Link to="/" className="nav-style">Pricing</Link>
          <Link to="/" className="nav-style">More deets</Link>
          <Link to="/" className="nav-style">Dank memes</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigations;
import React from 'react';
import { Link } from 'react-router-dom';
import BrandIcon from '../../Shared/BrandIcon/BrandIcon';
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footer-style p-0 m-0">
      <div className="p-5">
        <div className="row py-5">
          <div className="col-lg-4 col-md-6">
            <div className="p-3">
              <div className="p-3 d-flex">
                <Link to="/" className="footer-brand"><BrandIcon></BrandIcon></Link>
              </div>
              <div className="p-3">We know that honesty and transparency, coupled with reliable and friendly customer service, is what really builds customer trust.</div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="pb-3">COMPANY LINKS</h5>
            <ul className="padding-20">
              <li className="footer-link-styles">About</li>
              <li className="footer-link-styles">Awards</li>
              <li className="footer-link-styles">Community</li>
              <li className="footer-link-styles">Events</li>
              <li className="footer-link-styles">FAQs</li>
              <li className="footer-link-styles">Contact Us</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6">
            <h5 className="pb-3">{'\u00A0'}</h5>
            <ul className="padding-20">
              <li className="footer-link-styles">Services</li>
              <li className="footer-link-styles">Our Offers</li>
              <li className="footer-link-styles">History</li>
              <li className="footer-link-styles">Offices</li>
              <li className="footer-link-styles">Our Gallery</li>
              <li className="footer-link-styles">Shop</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="pl-3 pr-5">
              <h5 className="pb-3 text-uppercase">Contact Info</h5>
              <ul className="padding-20">
                <li><b>Address:</b> 1379 Shoreline Parkway, Mountain View, CA 94043, United States.</li>
                <li><b>Phone:</b> +1 718-999-3939</li>
                <li><b>E-mail:</b> contact@videoeditmania.com</li>
                <li><b>Skype:</b> help@videoeditmania.com</li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="border-white"/>
        <div className="row">
          <div className="col-md-6">
            <small className="text-grey">© AutoService - Design by @DoanDu with Love. All Rights Reserved.</small>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-end">
              <small className="footer-link-styles text-uppercase px-3 py-0 right-border">Home</small>
              <small className="footer-link-styles text-uppercase px-3 py-0 right-border">Privacy Policy</small>
              <small className="footer-link-styles text-uppercase pl-3 py-0">TOS</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
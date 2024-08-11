import React from 'react'
import logo from '../../../assets/logo.png'

function Footer() {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
        <img src={logo} width={100} height={100} alt="Rev Core Auto Logo" />
        <p>
          Rev Core Auto Ltd.
          <br />
          Providing reliable auto care since 1992.
          <br />
          Your trusted partner for all your vehicle needs.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Engine Diagnostics</a>
        <a className="link link-hover">Brake Services</a>
        <a className="link link-hover">Transmission Repair</a>
        <a className="link link-hover">Oil Changes</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Our Team</a>
        <a className="link link-hover">Testimonials</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Customer Support</h6>
        <a className="link link-hover">Contact Us</a>
        <a className="link link-hover">Schedule Service</a>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Service Warranty</a>
      </nav>
    </footer>
  )
}

export default Footer
import React from 'react';

function Footer() {
  return (
    <footer className="bg-light py-5 text-center px-5">
      <div className="container">
        
        {/* CTA Section */}
        <div className="mb-4">
          <p>Ready to take the next step?</p>
          <a href="link_to_booking_tool" className="btn btn-primary">Book Now</a>
        </div>

        {/* Company Logo and Name */}
        <div className="mb-4">
          <img src="path_to_logo.jpg" alt="Company Logo" className="img-fluid mb-2" style={{ maxWidth: '150px' }} />
          <p className="m-0">Your Company Name</p>
        </div>

        {/* Site Map */}
        <div className="row justify-content-center">
          <div className="col-auto">
            <a href="#" className="text-dark text-decoration-none">Home</a>
          </div>
          <div className="col-auto">
            <a href="#about" className="text-dark text-decoration-none">About Us</a>
          </div>
          <div className="col-auto">
            <a href="#services" className="text-dark text-decoration-none">Services</a>
          </div>
          <div className="col-auto">
            <a href="#faq" className="text-dark text-decoration-none">FAQ</a>
          </div>
          <div className="col-auto">
            <a href="#contact" className="text-dark text-decoration-none">Contact</a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4">
          <small className="text-muted">© {new Date().getFullYear()} Your Company Name. All rights reserved.</small>
        </div>

      </div>
    </footer>
  );
}

export default Footer;

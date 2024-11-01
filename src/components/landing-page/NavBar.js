import React from 'react';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">LOGO</a>
        
        {/* Toggler for small screens with border and shadow removed */}
        <button 
          className="navbar-toggler border-0 shadow-none"  // Removes border and shadow
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav" 
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#get-started">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#cta">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

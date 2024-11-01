import React from 'react';

function SolutionSection() {
  return (
    <section id="about" className="container my-5 py-5 px-5">
      <div className="row align-items-center">
        
        {/* Left Column: Text Content */}
        <div className="col-md-6">
          <h2>About Us</h2>
          <p>We’re here to help you achieve [solution overview] with our [product/service].</p>
          <p>Our mission is to provide [unique aspect of your solution].</p>
        </div>
        
        {/* Right Column: Image */}
        <div className="col-md-6">
          <img src="path_to_team_image.jpg" alt="Our Team" className="img-fluid mt-3" />
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;

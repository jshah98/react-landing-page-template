import React from 'react';

function HeroSection() {
  return (
    <header className="container my-5 py-5 px-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="mb-4 display-1">Your Path to [Desired Transformation]</h1>
          <p className="mb-4">Achieve [specific result] by using [product/service name].</p>
          
          <form className="mb-4">
            <input type="email" placeholder="Enter your email" className="form-control mb-3" />
            <button type="submit" className="btn btn-primary">Get Started Now</button>
            <small className="d-block mt-3 text-muted">We respect your privacy and keep your data safe.</small>
          </form>
          
          <div className="mt-5">
            <p><strong>Over 5,000 satisfied customers!</strong> See why people choose us.</p>
          </div>
        </div>
        
        <div className="col-md-6">
          <img src="path_to_product_image.jpg" alt="Product in use" className="img-fluid" />
        </div>
      </div>
    </header>
  );
}

export default HeroSection;

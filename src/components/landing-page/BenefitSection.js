import React from 'react';

function BenefitSection() {
  return (
    <section className="container my-5 px-5">
      {/* Divider */}
      <div className="container">
        <hr className="my-5" />
      </div>
      {/* Centered Header */}
      <h2 className="text-center mb-5">Why Choose Us?</h2>
      <div className="row">
        <div className="col-md-4 text-center">
          {/* Centered Image */}
          <div className="d-flex justify-content-center">
            <img src="path_to_benefit_image.jpg" alt="Benefit 1" className="img-fluid mb-3" />
          </div>
          <h4>Benefit 1: [Outcome]</h4>
          <p>Explain why this benefit matters to the user.</p>
        </div>
        
        <div className="col-md-4 text-center">
          {/* Centered Image */}
          <div className="d-flex justify-content-center">
            <img src="path_to_benefit_image.jpg" alt="Benefit 2" className="img-fluid mb-3" />
          </div>
          <h4>Benefit 2: [Outcome]</h4>
          <p>Explain why this benefit matters to the user.</p>
        </div>
        
        <div className="col-md-4 text-center">
          {/* Centered Image */}
          <div className="d-flex justify-content-center">
            <img src="path_to_benefit_image.jpg" alt="Benefit 3" className="img-fluid mb-3" />
          </div>
          <h4>Benefit 3: [Outcome]</h4>
          <p>Explain why this benefit matters to the user.</p>
        </div>
      </div>
      {/* Divider */}
      <div className="container">
        <hr className="my-5" />
      </div>
    </section>
  );
}

export default BenefitSection;

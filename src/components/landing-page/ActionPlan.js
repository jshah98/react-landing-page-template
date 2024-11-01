import React from 'react';
import { FaPhone, FaComments, FaSmile } from 'react-icons/fa';

function ActionPlan() {
  return (
    <section id="get-started" className="container my-5 py-5 px-5">
      <div className="row">
        
        {/* Left Column: Image */}
        <div className="col-md-6">
          <img src="path_to_image.jpg" alt="Customer Journey" className="img-fluid" />
        </div>
        
        {/* Right Column: Journey Steps */}
        <div className="col-md-6">
          <h2 className="mb-5">Getting Started is Easy</h2>

          {/* Step 1 */}
          <div className="d-flex align-items-start mb-4">
            <div className="step-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
              <FaPhone size={20} />
            </div>
            <div>
              <h4>Step 1: Book a Call</h4>
              <p>Book a call with us to get started.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="d-flex align-items-start mb-4">
            <div className="step-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
              <FaComments size={20} />
            </div>
            <div>
              <h4>Step 2: Consultation</h4>
              <p>We’ll discuss your needs and tailor the solution.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="d-flex align-items-start mb-4">
            <div className="step-icon bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '50px', height: '50px' }}>
              <FaSmile size={20} />
            </div>
            <div>
              <h4>Step 3: Enjoy the Benefits</h4>
              <p>Enjoy the benefits of [result of service].</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default ActionPlan;

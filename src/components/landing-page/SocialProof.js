import React from 'react';
import Testimonial from './Testimonial';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function SocialProof() {
  return (
    <section className="container my-5 py-5 px-5">
      
      {/* Logos and Section Title with Light Background */}
      <div className="bg-light py-5">
        <h3 className="text-center mb-4">Trusted by Leading Brands</h3>
        <div className="row justify-content-center align-items-center">
          <div className="col-4 col-md-2 mb-4">
            <img src="path_to_logo1.jpg" alt="Company 1" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2 mb-4">
            <img src="path_to_logo2.jpg" alt="Company 2" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2 mb-4">
            <img src="path_to_logo3.jpg" alt="Company 3" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2 mb-4">
            <img src="path_to_logo4.jpg" alt="Company 4" className="img-fluid" />
          </div>
          <div className="col-4 col-md-2 mb-4">
            <img src="path_to_logo5.jpg" alt="Company 5" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}


      {/* Testimonials Section Title */}
      {/* <h2 className="text-center mt-5">What Our Clients Are Saying</h2> */}
      <div id="testimonialCarousel" className="carousel slide mb-4 bg-light pb-5" data-bs-ride="carousel">
        
        <div className="carousel-inner">
          {/* First Testimonial - Active */}
          <div className="carousel-item active">
            <div className="p-5 col-md-8 mx-auto">
              <div className="card p-4">
                <Testimonial
                  pullQuote="Life-Changing Service!"
                  fullQuote="[Business Name] has made a huge difference for us. We highly recommend them!"
                  name="John Doe"
                  headshot="path_to_headshot1.jpg"
                  rating={5}
                />
              </div>
            </div>
          </div>

          {/* Second Testimonial */}
          <div className="carousel-item">
            <div className="p-5 col-md-8 mx-auto">
              <div className="card p-4">
                <Testimonial
                  pullQuote="Outstanding Quality!"
                  fullQuote="The level of quality and attention to detail is unmatched. Truly outstanding!"
                  name="Jane Smith"
                  headshot="path_to_headshot2.jpg"
                  rating={5}
                />
              </div>
            </div>
          </div>

          {/* Third Testimonial */}
          <div className="carousel-item">
            <div className="p-5 col-md-8 mx-auto">
              <div className="card p-4">
                <Testimonial
                  pullQuote="Exceeded Expectations"
                  fullQuote="Working with [Business Name] exceeded our expectations in every way!"
                  name="Alice Johnson"
                  headshot="path_to_headshot3.jpg"
                  rating={5}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev btn btn-link" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <FaArrowLeft size={24} className="text-dark" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next btn btn-link" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <FaArrowRight size={24} className="text-dark" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>

        
      </div>
    </section>
  );
}

export default SocialProof;

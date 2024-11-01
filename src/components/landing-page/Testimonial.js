// Testimonial.js

import React from 'react';
import { FaStar } from 'react-icons/fa'; // For star rating icon

function Testimonial({ pullQuote, fullQuote, name, headshot, rating }) {
  return (
    <div className="text-center p-4">
      {/* Pull Quote */}
      <h3 className="mb-3">"{pullQuote}"</h3>
      
      {/* Full Quote */}
      <p className="mb-4">"{fullQuote}"</p>
      
      {/* Headshot, Name, and Rating */}
      <div className="d-flex align-items-center justify-content-center">
        <img src={headshot} alt={`${name}'s headshot`} className="rounded-circle me-3" style={{ width: '50px', height: '50px' }} />
        <div>
          <h5 className="mb-1">{name}</h5>
          <div className="text-warning">
            {Array.from({ length: rating }).map((_, index) => (
              <FaStar key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;

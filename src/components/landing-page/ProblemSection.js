import React from 'react';

function ProblemSection() {
  return (
    <section className="container-fluid bg-light py-5  px-5">
      <div className="container">
        {/* Centered Headline */}
        <h2 className="text-center mb-4">Are You Struggling with [Problem]?</h2>
        
        {/* Centered container with right-aligned list */}
        <div className="d-flex justify-content-center">
          <ul className="text-start">
            <li>Symptom 1: Example issue that shows understanding.</li>
            <li>Symptom 2: Another relatable pain point.</li>
            <li>Symptom 3: Final example of user challenges.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;

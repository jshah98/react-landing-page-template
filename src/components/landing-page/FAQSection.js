import React from 'react';

function FAQSection() {
  return (
    <section className="container my-5 text-center py-5 px-5">
      <h2 className="mb-4">Frequently Asked Questions</h2>
      
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="accordion" id="faqAccordion">
            
            {/* FAQ Item 1 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading1">
                <button 
                  className="accordion-button collapsed bg-white text-dark fw-bold text-muted" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faq1"
                  aria-expanded="false" 
                  aria-controls="faq1"
                >
                  Will this really work for me?
                </button>
              </h2>
              <div id="faq1" className="accordion-collapse collapse" aria-labelledby="faqHeading1" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-start text-muted">
                  Yes! Our product is designed to help you achieve [desired outcome].
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading2">
                <button 
                  className="accordion-button collapsed bg-white text-dark fw-bold text-muted" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faq2"
                  aria-expanded="false" 
                  aria-controls="faq2"
                >
                  How long does it take to see results?
                </button>
              </h2>
              <div id="faq2" className="accordion-collapse collapse" aria-labelledby="faqHeading2" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-start text-muted">
                  Results may vary, but most users see improvements within [time frame].
                </div>
              </div>
            </div>

            {/* FAQ Item 3 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading3">
                <button 
                  className="accordion-button collapsed bg-white text-dark fw-bold text-muted" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faq3"
                  aria-expanded="false" 
                  aria-controls="faq3"
                >
                  Is there a money-back guarantee?
                </button>
              </h2>
              <div id="faq3" className="accordion-collapse collapse" aria-labelledby="faqHeading3" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-start text-muted">
                  Yes, we offer a [specific time frame] money-back guarantee for your peace of mind.
                </div>
              </div>
            </div>

            {/* FAQ Item 4 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading4">
                <button 
                  className="accordion-button collapsed bg-white text-dark fw-bold text-muted" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faq4"
                  aria-expanded="false" 
                  aria-controls="faq4"
                >
                  Can I use this with other products?
                </button>
              </h2>
              <div id="faq4" className="accordion-collapse collapse" aria-labelledby="faqHeading4" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-start text-muted">
                  Absolutely! Our product is compatible with [mention any common products] to enhance your experience.
                </div>
              </div>
            </div>

            {/* FAQ Item 5 */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="faqHeading5">
                <button 
                  className="accordion-button collapsed bg-white text-dark fw-bold text-muted" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#faq5"
                  aria-expanded="false" 
                  aria-controls="faq5"
                >
                  What support options are available?
                </button>
              </h2>
              <div id="faq5" className="accordion-collapse collapse" aria-labelledby="faqHeading5" data-bs-parent="#faqAccordion">
                <div className="accordion-body text-start text-muted">
                  We offer [support options such as live chat, email, or phone support] to assist you at any time.
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQSection;

import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-primary text-light py-5 mt-auto mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-4">
              <h5 className="fw-bold">Course Mora</h5>
              <p className="small">
                Learn what you desire.
              </p>
              <p className="small">
                © 2025 All rights reserved.
              </p>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/about" className="text-light text-decoration-none">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-light text-decoration-none">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/blog" className="text-light text-decoration-none">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-light text-decoration-none">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Resources</h6>
              <ul className="list-unstyled">
                <li>
                  <a href="/faq" className="text-light text-decoration-none">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/privacy" className="text-light text-decoration-none">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-light text-decoration-none">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 mb-4">
              <h6 className="fw-bold">Contact</h6>
              <p className="small mb-1">📍 123 Green Street, City</p>
              <p className="small mb-1">📞 +91 12345 67890</p>
              <p className="small">📧 info@rbuilder.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
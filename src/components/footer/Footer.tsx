import type { JSX } from "react";
import "./Footer.css";

function Footer(): JSX.Element {
  return (
    <footer className="site-footer" aria-labelledby="footer-heading">
      <div className="site-footer__inner">
        <div className="footer-col footer-about">
          <a className="brand" href="#" aria-label="North East Explorer home">
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <rect width="24" height="24" rx="6" fill="#2ee59d" />
              <path
                d="M6 15L10 9l4 6 4-8"
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="brand__name">North East Explorer</span>
          </a>

          <p className="footer-about__text">
            Explore the captivating beauty and rich culture of North East India
            with us.
          </p>

          <div className="socials" aria-hidden>
            <a href="#" className="social" aria-label="Facebook">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.2c0-2.3 1.4-3.5 3.3-3.5.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2v1.5h2.3l-.4 2.9h-1.9v7A10 10 0 0022 12z"
                  fill="#6b7280"
                />
              </svg>
            </a>
            <a href="#" className="social" aria-label="Instagram">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="4"
                  stroke="#6b7280"
                  strokeWidth="1.2"
                />
                <path
                  d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z"
                  stroke="#6b7280"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 6.5h.01"
                  stroke="#6b7280"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#" className="social" aria-label="Twitter">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 5.9c-.6.3-1.3.5-2 .6.7-.4 1.2-1 1.4-1.7-.6.4-1.3.7-2 .8-.6-.6-1.5-1-2.4-1-1.8 0-3.3 1.6-3 3.3-2.5-.1-4.7-1.3-6.2-3.1-.8 1.4-.2 3.2 1.1 4.1-.5 0-1-.2-1.5-.4v.1c0 1.6 1.1 2.9 2.6 3.2-.4.1-.9.1-1.3.1-.3 0-.6 0-.9-.1.6 1.9 2.4 3.2 4.5 3.3-1.6 1.3-3.5 2.1-5.5 2.1h-.9c1.9 1.2 4.2 2 6.7 2 8 0 12.4-6.6 12.4-12.3v-.6C21 7.2 21.6 6.6 22 5.9z"
                  fill="#6b7280"
                />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col footer-links">
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <a href="#">Destinations</a>
              </li>
              <li>
                <a href="#">Tours</a>
              </li>
              <li>
                <a href="#">Travel Tips</a>
              </li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-col footer-contact">
          <h4>Contact Us</h4>
          <ul className="contact-list">
            <li>123 Explorer St, Guwahati, Assam</li>
            <li>+91 12345 67890</li>
            <li>info@northeastexplorer.com</li>
          </ul>
        </div>
      </div>

      <div className="site-footer__bottom">
        <div className="site-footer__inner">
          <p>© 2025 North East Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

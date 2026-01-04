import "./Header.css";
import { useEffect, useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // lock body scroll when drawer is open
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // close on escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // close drawer when resizing to desktop width
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 800 && isOpen) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#">
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

        <nav className="site-nav" aria-label="Main navigation">
          <a className="site-nav__link active" href="#">
            Home
          </a>
          <a className="site-nav__link" href="#">
            Destinations
          </a>
          <a className="site-nav__link" href="#">
            Tours
          </a>
          <a className="site-nav__link" href="#contact">
            Contact
          </a>
        </nav>

        <div className="site-actions">
          <button className="btn btn-primary">Book Your Tour</button>
        </div>

        {/* Mobile menu button */}
        <button
          className="menu-btn"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((s) => !s)}
        >
          {/* hamburger icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <rect x="3" y="6" width="18" height="2" rx="1" fill="#213547" />
            <rect x="3" y="11" width="18" height="2" rx="1" fill="#213547" />
            <rect x="3" y="16" width="18" height="2" rx="1" fill="#213547" />
          </svg>
        </button>

        {/* Mobile drawer */}
        <div
          className={`site-drawer ${isOpen ? "is-open" : ""}`}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="site-drawer__overlay"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="site-drawer__panel">
            <button
              className="site-drawer__close"
              aria-label="Close menu"
              onClick={() => setIsOpen(false)}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="#213547"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <nav className="site-nav--mobile" aria-label="Mobile navigation">
              <a
                className="site-nav__link"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a
                className="site-nav__link"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Destinations
              </a>
              <a
                className="site-nav__link"
                href="#"
                onClick={() => setIsOpen(false)}
              >
                Tours
              </a>
              <a
                className="site-nav__link"
                href="#contact"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>

              <div className="mobile-actions">
                <button
                  className="btn btn-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Book Your Tour
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

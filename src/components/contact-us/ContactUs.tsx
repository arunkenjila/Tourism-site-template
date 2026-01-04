import "./ContactUs.css";
import { useState } from "react";
import ContactQuery from "./contact-query/ContactQuery";
import ContactBookTour from "./contact-book-tour/ContactBookTour";

function ContactUs() {
  // general query
  // name => entry.1520577215
  // Contact No => entry.1734173326
  // email => entry.88394038
  // message => entry.1015613209
  // formGoogleSheetURL =>https://docs.google.com/forms/d/e/1FAIpQLSfPvp_DSalsYDvLKVu3GKwJRb_JqQKMmeVbttvkeGV9kzY8XQ/viewform?usp=header

  // booking query
  // name => entry.1867240086
  // Contact No => entry.2105637897
  // email => entry.1674318937
  // package nmae => entry.1351105736
  // No of travelers => entry.1607438532
  // Year => entry.680648076_year
  // month => entry.680648076_month
  // day => entry.680648076_day
  // https://docs.google.com/forms/d/e/1FAIpQLSdarc2vwJcBgEO9fpf0YmW13fjytEcy1Fwo6zXg8QqOqCsisQ/viewform?usp=header

  const [mode, setMode] = useState<"general" | "booking">("general");

  // Booking form was moved into `ContactBookTour` component; state and handlers are now local to that component.
  return (
    <section id="contact" className="contact-us">
      <div className={`contact-us__inner single`}>
        <div
          className="contact-toggle"
          role="tablist"
          aria-label="Contact form toggle"
        >
          <button
            type="button"
            className={`contact-toggle__btn ${
              mode === "general" ? "is-active" : ""
            }`}
            onClick={() => setMode("general")}
            aria-pressed={mode === "general"}
          >
            General Enquiry
          </button>

          <button
            type="button"
            className={`contact-toggle__btn ${
              mode === "booking" ? "is-active" : ""
            }`}
            onClick={() => setMode("booking")}
            aria-pressed={mode === "booking"}
          >
            Book Tour
          </button>
        </div>

        {mode === "general" ? <ContactQuery /> : <ContactBookTour />}
      </div>
    </section>
  );
}

export default ContactUs;

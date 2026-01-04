import "../ContactUs.css";
import { useState } from "react";

function ContactBookTour() {
  const [bookingName, setBookingName] = useState("");
  const [bookingContactNumber, setBookingContactNumber] = useState("");
  const [bookingContactNumberError, setBookingContactNumberError] = useState<
    string | null
  >(null);
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingPackage, setBookingPackage] = useState("Meghalaya Waterfalls");
  const [bookingCustomPackage, setBookingCustomPackage] = useState("");
  const [bookingTravellers, setBookingTravellers] = useState<number>(1);
  const [bookingPreferredDate, setBookingPreferredDate] = useState("");
  const [bookingSubmitting, setBookingSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const isValidIndianPhone = (value: string) => {
    const normalized = (value || "").replace(/\s+/g, "");
    return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(normalized);
  };

  const handleBookingSubmit = (e: any) => {
    e.preventDefault();
    setBookingSubmitting(true);

    if (!isValidIndianPhone(bookingContactNumber)) {
      setBookingSubmitting(false);
      setBookingContactNumberError(
        "Enter a valid Indian phone number (e.g., 7259937594 or +91 7259937594)"
      );
      setPopupMessage("Please provide a valid Indian phone number");
      setShowPopup(true);
      return;
    }

    if (bookingPackage === "Custom" && !bookingCustomPackage.trim()) {
      setBookingSubmitting(false);
      setPopupMessage("Please provide a custom package name");
      setShowPopup(true);
      return;
    }

    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSdarc2vwJcBgEO9fpf0YmW13fjytEcy1Fwo6zXg8QqOqCsisQ/formResponse";
    form.method = "POST";
    form.style.display = "none";

    const append = (nameAttr: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = nameAttr;
      input.value = value;
      form.appendChild(input);
    };

    append("entry.1867240086", bookingName);
    append("entry.2105637897", bookingContactNumber);
    append("entry.1674318937", bookingEmail);

    const packageValue =
      bookingPackage === "Custom" ? bookingCustomPackage : bookingPackage;
    append("entry.1351105736", packageValue);

    append("entry.1607438532", String(bookingTravellers));

    append("entry.981487305", bookingPreferredDate);

    const iframeName = `google-booking-target-${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.style.display = "none";

    document.body.appendChild(iframe);
    form.target = iframeName;
    document.body.appendChild(form);

    let completed = false;
    const cleanup = () => {
      if (completed) return;
      completed = true;
      setBookingSubmitting(false);
      setPopupMessage(
        "Fantastic — booking request received! We'll contact you to confirm."
      );
      setShowPopup(true);
      setBookingName("");
      setBookingContactNumber("");
      setBookingContactNumberError(null);
      setBookingPackage("Meghalaya Waterfalls");
      setBookingCustomPackage("");
      setBookingTravellers(1);
      setBookingPreferredDate("");
      if (form.parentNode) document.body.removeChild(form);
      if (iframe.parentNode) document.body.removeChild(iframe);
    };

    iframe.addEventListener(
      "load",
      () => {
        setTimeout(cleanup, 400);
      },
      { once: true }
    );

    form.submit();

    setTimeout(() => {
      if (!completed) cleanup();
    }, 3000);
  };

  return (
    <div className="contact-card">
      <h3 className="contact-card__title">Book Your Tour</h3>

      <form onSubmit={handleBookingSubmit} className="contact-form">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            className="field__control"
            type="text"
            placeholder="Your Name"
            value={bookingName}
            onChange={(e) => setBookingName(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Contact Number</span>
          <input
            className="field__control"
            type="tel"
            placeholder="Enter your contact number"
            value={bookingContactNumber}
            onChange={(e) => {
              const val = e.target.value;
              setBookingContactNumber(val);
              setBookingContactNumberError(
                val
                  ? isValidIndianPhone(val)
                    ? null
                    : "Enter a valid Indian phone number (e.g., 7259937594 or +91 7259937594)"
                  : null
              );
            }}
            required
          />
          {bookingContactNumberError && (
            <div className="field__error">{bookingContactNumberError}</div>
          )}
        </label>

        <label className="field">
          <span className="field__label">Email Id</span>
          <input
            className="field__control"
            type="email"
            placeholder="your.email@example.com"
            value={bookingEmail}
            onChange={(e) => setBookingEmail(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Package Name</span>
          <select
            className="field__control"
            value={bookingPackage}
            onChange={(e) => setBookingPackage(e.target.value)}
          >
            <option>Meghalaya Waterfalls</option>
            <option>Kaziranga National Park</option>
            <option>Nagaland Cultural Heritage Tour</option>
            <option>Tawang Monastery</option>
            <option>Custom</option>
          </select>
        </label>

        {bookingPackage === "Custom" && (
          <label className="field">
            <span className="field__label">Custom Package Name</span>
            <input
              className="field__control"
              type="text"
              placeholder="Describe your custom package"
              value={bookingCustomPackage}
              onChange={(e) => setBookingCustomPackage(e.target.value)}
              required
            />
          </label>
        )}

        <label className="field">
          <span className="field__label">Number of Travellers</span>
          <input
            className="field__control"
            type="number"
            min={1}
            value={bookingTravellers}
            onChange={(e) => setBookingTravellers(Number(e.target.value))}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Preferred Date</span>
          <input
            className="field__control"
            type="date"
            value={bookingPreferredDate}
            onChange={(e) => setBookingPreferredDate(e.target.value)}
            required
          />
        </label>

        <div className="field field--actions">
          <button
            className="btn-primary contact-us__btn"
            type="submit"
            disabled={bookingSubmitting}
          >
            {bookingSubmitting ? "Sending..." : "Submit Booking Request"}
          </button>
        </div>
      </form>

      {showPopup && popupMessage && (
        <div className="contact-popup" role="dialog" aria-modal="true">
          <div className="contact-popup__box">
            <p className="contact-popup__message">{popupMessage}</p>
            <div className="contact-popup__actions">
              <button
                type="button"
                className="btn-primary"
                onClick={() => {
                  setShowPopup(false);
                  setPopupMessage(null);
                }}
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ContactBookTour;

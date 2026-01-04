import "../ContactUs.css";
import { useState } from "react";

function ContactQuery() {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactNumberError, setContactNumberError] = useState<string | null>(
    null
  );
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | "error">(null);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);

  const isValidIndianPhone = (value: string) => {
    const normalized = (value || "").replace(/\s+/g, "");
    return /^(?:\+91|91|0)?[6-9]\d{9}$/.test(normalized);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    if (!isValidIndianPhone(contactNumber)) {
      setSubmitting(false);
      setContactNumberError(
        "Enter a valid Indian phone number (e.g., 7259937594 or +91 7259937594)"
      );
      setStatus("error");
      return;
    }

    const form = document.createElement("form");
    form.action =
      "https://docs.google.com/forms/d/e/1FAIpQLSfPvp_DSalsYDvLKVu3GKwJRb_JqQKMmeVbttvkeGV9kzY8XQ/formResponse";
    form.method = "POST";
    form.style.display = "none";

    const append = (nameAttr: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = nameAttr;
      input.value = value;
      form.appendChild(input);
    };

    append("entry.1520577215", name);
    append("entry.1734173326", contactNumber);
    append("entry.88394038", email);
    append("entry.1015613209", message);

    const iframeName = `google-forms-target-${Date.now()}`;
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
      setSubmitting(false);
      setPopupMessage(
        "Awesome! Your inquiry’s received; expect a response shortly."
      );
      setShowPopup(true);
      setName("");
      setContactNumber("");
      setContactNumberError(null);
      setEmail("");
      setMessage("");
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
      <h3 className="contact-card__title">General Inquiry</h3>

      <form onSubmit={handleSubmit} className="contact-form">
        <label className="field">
          <span className="field__label">Name</span>
          <input
            className="field__control"
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Contact Number</span>
          <input
            className="field__control"
            type="tel"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(e) => {
              const val = e.target.value;
              setContactNumber(val);
              setContactNumberError(
                val
                  ? isValidIndianPhone(val)
                    ? null
                    : "Enter a valid Indian phone number (e.g., 7259937594 or +91 7259937594)"
                  : null
              );
            }}
            required
          />
          {contactNumberError && (
            <div className="field__error">{contactNumberError}</div>
          )}
        </label>

        <label className="field">
          <span className="field__label">Email</span>
          <input
            className="field__control"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label className="field">
          <span className="field__label">Message</span>
          <textarea
            className="field__control field__control--textarea"
            rows={5}
            placeholder="Tell us how we can help..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </label>

        {status === "error" && (
          <div className="contact-form__status contact-form__status--error">
            Oops — something went wrong. Please try again.
          </div>
        )}

        <div className="field field--actions">
          <button
            className="btn-primary contact-us__btn"
            type="submit"
            disabled={submitting}
          >
            {submitting ? "Sending..." : "Send Message"}
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

export default ContactQuery;

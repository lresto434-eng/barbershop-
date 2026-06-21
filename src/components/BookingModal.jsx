import { useState, useEffect } from "react";

const FORMSPREE_ID = "YOUR_FORM_ID";

export default function BookingModal({ isOpen, onClose }) {
  const [view, setView] = useState("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [waHref, setWaHref] = useState("#");

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const t = setTimeout(() => {
        setView("form");
        setSubmitting(false);
        setError(false);
      }, 350);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    const data = new FormData(e.target);
    const name    = data.get("name") || "";
    const phone   = data.get("phone") || "";
    const service = data.get("service") || "";
    const day     = data.get("preferred_day") || "";
    const time    = data.get("preferred_time") || "";
    const message = data.get("message") || "";

    const waText = `Hello Savvas! I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred day: ${day}\nPreferred time: ${time}${message ? "\nMessage: " + message : ""}`;
    setWaHref("https://wa.me/306975922974?text=" + encodeURIComponent(waText));

    fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) { setView("success"); }
        else { setError(true); setSubmitting(false); }
      })
      .catch(() => { setError(true); setSubmitting(false); });
  }

  return (
    <div className={`modal-overlay${isOpen ? " open" : ""}`} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal-panel" role="dialog" aria-modal="true" aria-label="Book appointment">
        <button className="modal-close-btn" type="button" onClick={onClose} aria-label="Close">✕</button>

        {view === "form" ? (
          <div>
            <div className="modal-eyebrow">Appointment</div>
            <h2 className="modal-heading">Book Your<br /><em>Visit</em></h2>
            <p className="modal-subtext">Fill in your details and Savvas will confirm your appointment.</p>
            <div className="modal-rule"></div>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Booking — Old Fashioned Barbershop" />
              <div className="modal-form-row">
                <div className="modal-field">
                  <label htmlFor="bookName">Your Name</label>
                  <input type="text" id="bookName" name="name" placeholder="e.g. Nikos" required />
                </div>
                <div className="modal-field">
                  <label htmlFor="bookPhone">Phone / WhatsApp</label>
                  <input type="tel" id="bookPhone" name="phone" placeholder="+30 69X XXX XXXX" required />
                </div>
              </div>
              <div className="modal-field">
                <label htmlFor="bookService">Service</label>
                <select id="bookService" name="service" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  <option>Men's Haircut — €12</option>
                  <option>Kids Haircut — €8</option>
                  <option>Head Shave — €15</option>
                  <option>Beard Trim — €8</option>
                  <option>Hair &amp; Beard — €18</option>
                  <option>Hot Towel Shave — €20</option>
                </select>
              </div>
              <div className="modal-form-row">
                <div className="modal-field">
                  <label htmlFor="bookDay">Preferred Day</label>
                  <input type="text" id="bookDay" name="preferred_day" placeholder="e.g. Friday" required />
                </div>
                <div className="modal-field">
                  <label htmlFor="bookTime">Preferred Time</label>
                  <input type="text" id="bookTime" name="preferred_time" placeholder="e.g. Morning" required />
                </div>
              </div>
              <div className="modal-field">
                <label htmlFor="bookMessage">Message (optional)</label>
                <textarea id="bookMessage" name="message" placeholder="Any notes for Savvas…" />
              </div>
              {error && (
                <p className="form-error-msg">Something went wrong. Please try again or call us on +30 231 602 2223.</p>
              )}
              <button type="submit" className="modal-btn-submit" disabled={submitting}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
                {submitting ? "Sending…" : "Send Booking Request"}
              </button>
            </form>
            <p className="modal-footer-note">You'll receive a confirmation at your phone number.</p>
          </div>
        ) : (
          <div>
            <div className="modal-eyebrow">Confirmed</div>
            <h2 className="modal-heading">Request<br /><em>Sent</em></h2>
            <p className="modal-subtext">Savvas will be in touch shortly to confirm your appointment.</p>
            <div className="modal-rule"></div>
            <a href={waHref} target="_blank" rel="noopener" className="modal-btn-whatsapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.543a.5.5 0 00.6.6l5.733-1.476A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 01-5.06-1.376l-.363-.216-3.761.968.992-3.668-.236-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 5.477 10 10-4.477 10-10 10z" />
              </svg>
              Also Confirm via WhatsApp
            </a>
            <button type="button" className="modal-btn-dismiss" onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}

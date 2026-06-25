import { useState, useEffect } from "react";

const FORMSPREE_ID = "YOUR_FORM_ID";

const t = {
  el: {
    eyebrow: "Ραντεβού",
    heading: <>Κλείσε την<br /><em>Επίσκεψή σου</em></>,
    subtext: "Συμπλήρωσε τα στοιχεία σου και ο Σάββας θα επιβεβαιώσει το ραντεβού σου.",
    nameLabel: "Το Όνομά σου",
    namePlaceholder: "π.χ. Νίκος",
    phoneLabel: "Τηλέφωνο / WhatsApp",
    phonePlaceholder: "+30 69X XXX XXXX",
    serviceLabel: "Υπηρεσία",
    servicePlaceholder: "Επίλεξε υπηρεσία…",
    services: ["Ανδρικό Κούρεμα — €12", "Παιδικό Κούρεμα — €8", "Ξύρισμα Κεφαλής — €15", "Τακτοποίηση Γενιών — €8", "Μαλλιά & Γένια — €18", "Ξύρισμα με Ζεστή Πετσέτα — €20"],
    dayLabel: "Προτιμώμενη Μέρα",
    dayPlaceholder: "π.χ. Παρασκευή",
    timeLabel: "Προτιμώμενη Ώρα",
    timePlaceholder: "π.χ. Πρωί",
    messageLabel: "Μήνυμα (προαιρετικό)",
    messagePlaceholder: "Οποιεσδήποτε σημειώσεις για τον Σάββα…",
    error: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά ή καλέστε μας στο +30 231 602 2223.",
    submit: "Αποστολή Αιτήματος",
    submitting: "Αποστολή…",
    footerNote: "Θα λάβετε επιβεβαίωση στον αριθμό τηλεφώνου σας.",
    successEyebrow: "Επιβεβαιώθηκε",
    successHeading: <>Αίτημα<br /><em>Εστάλη</em></>,
    successSubtext: "Ο Σάββας θα επικοινωνήσει μαζί σου σύντομα για να επιβεβαιώσει το ραντεβού σου.",
    whatsapp: "Επιβεβαίωση και μέσω WhatsApp",
    close: "Κλείσιμο",
    waMessage: (name, phone, service, day, time, message) =>
      `Γεια σου Σάββα! Θα ήθελα να κλείσω ένα ραντεβού.\n\nΌνομα: ${name}\nΤηλέφωνο: ${phone}\nΥπηρεσία: ${service}\nΠροτιμώμενη μέρα: ${day}\nΠροτιμώμενη ώρα: ${time}${message ? "\nΜήνυμα: " + message : ""}`,
  },
  en: {
    eyebrow: "Appointment",
    heading: <>Book Your<br /><em>Visit</em></>,
    subtext: "Fill in your details and Savvas will confirm your appointment.",
    nameLabel: "Your Name",
    namePlaceholder: "e.g. Nikos",
    phoneLabel: "Phone / WhatsApp",
    phonePlaceholder: "+30 69X XXX XXXX",
    serviceLabel: "Service",
    servicePlaceholder: "Select a service…",
    services: ["Men's Haircut — €12", "Kids Haircut — €8", "Head Shave — €15", "Beard Trim — €8", "Hair & Beard — €18", "Hot Towel Shave — €20"],
    dayLabel: "Preferred Day",
    dayPlaceholder: "e.g. Friday",
    timeLabel: "Preferred Time",
    timePlaceholder: "e.g. Morning",
    messageLabel: "Message (optional)",
    messagePlaceholder: "Any notes for Savvas…",
    error: "Something went wrong. Please try again or call us on +30 231 602 2223.",
    submit: "Send Booking Request",
    submitting: "Sending…",
    footerNote: "You'll receive a confirmation at your phone number.",
    successEyebrow: "Confirmed",
    successHeading: <>Request<br /><em>Sent</em></>,
    successSubtext: "Savvas will be in touch shortly to confirm your appointment.",
    whatsapp: "Also Confirm via WhatsApp",
    close: "Close",
    waMessage: (name, phone, service, day, time, message) =>
      `Hello Savvas! I would like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred day: ${day}\nPreferred time: ${time}${message ? "\nMessage: " + message : ""}`,
  },
};

export default function BookingModal({ isOpen, onClose, lang }) {
  const [view, setView] = useState("form");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const [waHref, setWaHref] = useState("#");
  const tx = t[lang];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      const timer = setTimeout(() => {
        setView("form");
        setSubmitting(false);
        setError(false);
      }, 350);
      return () => clearTimeout(timer);
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

    setWaHref("https://wa.me/306975922974?text=" + encodeURIComponent(tx.waMessage(name, phone, service, day, time, message)));

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
            <div className="modal-eyebrow">{tx.eyebrow}</div>
            <h2 className="modal-heading">{tx.heading}</h2>
            <p className="modal-subtext">{tx.subtext}</p>
            <div className="modal-rule"></div>

            <form onSubmit={handleSubmit}>
              <input type="hidden" name="_subject" value="New Booking — Old Fashioned Barbershop" />
              <div className="modal-form-row">
                <div className="modal-field">
                  <label htmlFor="bookName">{tx.nameLabel}</label>
                  <input type="text" id="bookName" name="name" placeholder={tx.namePlaceholder} required />
                </div>
                <div className="modal-field">
                  <label htmlFor="bookPhone">{tx.phoneLabel}</label>
                  <input type="tel" id="bookPhone" name="phone" placeholder={tx.phonePlaceholder} required />
                </div>
              </div>
              <div className="modal-field">
                <label htmlFor="bookService">{tx.serviceLabel}</label>
                <select id="bookService" name="service" required defaultValue="">
                  <option value="" disabled>{tx.servicePlaceholder}</option>
                  {tx.services.map(s => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="modal-form-row">
                <div className="modal-field">
                  <label htmlFor="bookDay">{tx.dayLabel}</label>
                  <input type="text" id="bookDay" name="preferred_day" placeholder={tx.dayPlaceholder} required />
                </div>
                <div className="modal-field">
                  <label htmlFor="bookTime">{tx.timeLabel}</label>
                  <input type="text" id="bookTime" name="preferred_time" placeholder={tx.timePlaceholder} required />
                </div>
              </div>
              <div className="modal-field">
                <label htmlFor="bookMessage">{tx.messageLabel}</label>
                <textarea id="bookMessage" name="message" placeholder={tx.messagePlaceholder} />
              </div>
              {error && <p className="form-error-msg">{tx.error}</p>}
              <button type="submit" className="modal-btn-submit" disabled={submitting}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
                </svg>
                {submitting ? tx.submitting : tx.submit}
              </button>
            </form>
            <p className="modal-footer-note">{tx.footerNote}</p>
          </div>
        ) : (
          <div>
            <div className="modal-eyebrow">{tx.successEyebrow}</div>
            <h2 className="modal-heading">{tx.successHeading}</h2>
            <p className="modal-subtext">{tx.successSubtext}</p>
            <div className="modal-rule"></div>
            <a href={waHref} target="_blank" rel="noopener" className="modal-btn-whatsapp">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.118 1.528 5.845L.057 23.543a.5.5 0 00.6.6l5.733-1.476A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 01-5.06-1.376l-.363-.216-3.761.968.992-3.668-.236-.378A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 5.477 10 10-4.477 10-10 10z" />
              </svg>
              {tx.whatsapp}
            </a>
            <button type="button" className="modal-btn-dismiss" onClick={onClose}>{tx.close}</button>
          </div>
        )}
      </div>
    </div>
  );
}

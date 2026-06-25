const t = {
  el: {
    label: "Επικοινωνήστε",
    heading: <>Έτοιμος για ένα<br /><em style={{ fontFamily: "'Playfair Display',serif", color: "var(--blue)" }}>σωστό κούρεμα;</em></>,
    call: "Καλέστε Μας",
    instaLabel: "Instagram",
    bookLabel: "Κλείσε Τώρα",
    bookValue: "Αίτημα Ραντεβού",
    footer: "Φτιαγμένο με φροντίδα",
  },
  en: {
    label: "Get In Touch",
    heading: <>Ready for a<br /><em style={{ fontFamily: "'Playfair Display',serif", color: "var(--blue)" }}>proper cut?</em></>,
    call: "Call Us",
    instaLabel: "Instagram",
    bookLabel: "Book Now",
    bookValue: "Request an Appointment",
    footer: "Crafted with care",
  },
};

export default function Contact({ onBook, lang }) {
  const tx = t[lang];
  return (
    <section id="contact">
      <div style={{ maxWidth: "1080px", margin: "0 auto", textAlign: "center", marginBottom: "3.5rem" }}>
        <div className="section-label" style={{ justifyContent: "center" }}>{tx.label}</div>
        <h2 className="section-title" style={{ marginBottom: 0 }}>{tx.heading}</h2>
      </div>
      <div className="contact-inner">
        <a className="contact-block" href="tel:+302316022223">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.18 2 2 0 012 .01h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" />
            </svg>
          </div>
          <div className="contact-label">{tx.call}</div>
          <div className="contact-value">+30 231 602 2223</div>
        </a>
        <div className="contact-divider"></div>
        <a className="contact-block" href="https://www.instagram.com/oldfashioned.barbershop" target="_blank" rel="noopener">
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </div>
          <div className="contact-label">{tx.instaLabel}</div>
          <div className="contact-value">@oldfashioned.barber</div>
        </a>
        <div className="contact-divider"></div>
        <button className="contact-block" type="button" onClick={onBook} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "inherit" }}>
          <div className="contact-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01" />
            </svg>
          </div>
          <div className="contact-label">{tx.bookLabel}</div>
          <div className="contact-value">{tx.bookValue}</div>
        </button>
      </div>
      <div className="footer-bottom">
        <div className="footer-logo">Old Fashioned</div>
        <div>© 2026 Old Fashioned Barbershop · Aristidou 3, Kalamaria</div>
        <div>{tx.footer}</div>
      </div>
    </section>
  );
}

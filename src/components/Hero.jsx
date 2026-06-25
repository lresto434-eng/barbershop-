const t = {
  el: { tagline: "Κλασικά κουρέματα. Διαχρονική τέχνη. Σωστό ξύρισμα.", book: "Κλείσε Ραντεβού", scroll: "Κύλισε" },
  en: { tagline: "Classic cuts. Timeless craft. A proper shave.", book: "Book Your Appointment", scroll: "Scroll" },
};

export default function Hero({ onBook, lang }) {
  const tx = t[lang];
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-eyebrow">Kalamaria, Thessaloniki</div>
        <h1>Old <span className="accent">Fashioned</span><br />Barbershop</h1>
        <div className="hero-rule"></div>
        <p className="hero-tagline">{tx.tagline}</p>
        <button className="hero-cta" type="button" onClick={onBook}>
          {tx.book}
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="hero-scroll">{tx.scroll}</div>
    </section>
  );
}

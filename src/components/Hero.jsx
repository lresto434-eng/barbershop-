export default function Hero({ onBook }) {
  return (
    <section className="hero" id="home">
      <div className="hero-bg"></div>
      <div className="hero-inner">
        <div className="hero-eyebrow">Kalamaria, Thessaloniki</div>
        <h1>Old <span className="accent">Fashioned</span><br />Barbershop</h1>
        <div className="hero-rule"></div>
        <p className="hero-tagline">Classic cuts. Timeless craft. A proper shave.</p>
        <button className="hero-cta" type="button" onClick={onBook}>
          Book Your Appointment
          <svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="hero-scroll">Scroll</div>
    </section>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="inner">
        <div className="about-grid">
          <div className="about-image">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
              <circle cx="12" cy="13" r="3" />
              <path d="M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
            <span>Photo Coming Soon</span>
          </div>
          <div className="about-content">
            <div className="section-label">Our Story</div>
            <h2 className="section-title">Meet<br /><em>Savvas</em></h2>
            <blockquote className="about-quote">
              "A barbershop should feel like a second home — where you sit down, breathe out, and leave looking your best."
            </blockquote>
            <p className="about-text">
              Savvas built Old Fashioned on a simple belief: that a great haircut is more than just scissors and a mirror. It is patience, attention, and the kind of craft that cannot be rushed. After years spent perfecting his trade, he opened his own shop in Kalamaria — a place where every client gets the full experience.
            </p>
            <p className="about-text">
              Old Fashioned is not a chain. There are no screens, no conveyor belts, no strangers. Just one barber, his tools, and an old-school dedication to doing the job right.
            </p>
            <div className="about-sig">— Savvas</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HoursLocation() {
  return (
    <section id="hours">
      <div className="inner">
        <div className="section-label">Find Us</div>
        <h2 className="section-title">Hours &amp;<br />Location</h2>
        <div className="hours-layout">
          <div>
            <div className="hours-card">
              <h3>Opening Hours</h3>
              <div className="hours-row">
                <span className="hours-day">Monday</span>
                <span className="hours-closed">Closed</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Tuesday – Friday</span>
                <span className="hours-time">10:00–14:00 &amp; 18:00–21:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Saturday</span>
                <span className="hours-time">10:00–16:00</span>
              </div>
              <div className="hours-row">
                <span className="hours-day">Sunday</span>
                <span className="hours-closed">Closed</span>
              </div>
              <div className="address-block">
                <div className="addr-label">Address</div>
                <p>Aristidou 3<br />Kalamaria 551 34, Thessaloniki</p>
                <a href="tel:+302316022223">+30 231 602 2223</a>
              </div>
            </div>
          </div>
          <div className="map-wrap">
            <iframe
              src="https://maps.google.com/maps?q=Aristidou+3,+Kalamaria,+55134,+Greece&output=embed"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              title="Old Fashioned Barbershop Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const t = {
  el: {
    label: "Βρείτε Μας",
    heading: <>Ωράριο &amp;<br />Τοποθεσία</>,
    hoursTitle: "Ώρες Λειτουργίας",
    days: [
      { day: "Κυριακή", closed: true },
      { day: "Δευτέρα", closed: true },
      { day: "Τρίτη – Παρασκευή", time: "09:00–14:00 | 17:00–21:00" },
      { day: "Σάββατο", time: "10:00–17:00" },
    ],
    closed: "Κλειστά",
    addrLabel: "Διεύθυνση",
  },
  en: {
    label: "Find Us",
    heading: <>Hours &amp;<br />Location</>,
    hoursTitle: "Opening Hours",
    days: [
      { day: "Sunday", closed: true },
      { day: "Monday", closed: true },
      { day: "Tuesday – Friday", time: "09:00–14:00 | 17:00–21:00" },
      { day: "Saturday", time: "10:00–17:00" },
    ],
    closed: "Closed",
    addrLabel: "Address",
  },
};

export default function HoursLocation({ lang }) {
  const tx = t[lang];
  return (
    <section id="hours">
      <div className="inner">
        <div className="section-label">{tx.label}</div>
        <h2 className="section-title">{tx.heading}</h2>
        <div className="hours-layout">
          <div>
            <div className="hours-card">
              <h3>{tx.hoursTitle}</h3>
              {tx.days.map(d => (
                <div className="hours-row" key={d.day}>
                  <span className="hours-day">{d.day}</span>
                  {d.closed
                    ? <span className="hours-closed">{tx.closed}</span>
                    : <span className="hours-time">{d.time}</span>
                  }
                </div>
              ))}
              <div className="address-block">
                <div className="addr-label">{tx.addrLabel}</div>
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

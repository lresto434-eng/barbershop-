const t = {
  el: {
    label: "Τι Προσφέρουμε",
    heading: <>Υπηρεσίες &amp;<br /><em style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic" }}>Τιμές</em></>,
    hairCat: "Μαλλιά",
    beardCat: "Γένια & Ξύρισμα",
    note: "Οι τιμές είναι ενδεικτικές. Για περισσότερες πληροφορίες, τηλεφωνήστε μας.",
    services: [
      { name: "Ανδρικό Κούρεμα", desc: "Κούρεμα με ψαλίδι ή μηχανή, φινίρισμα με στυλ", price: "€12" },
      { name: "Παιδικό Κούρεμα", desc: "Κάτω από 12 ετών", price: "€8" },
      { name: "Ξύρισμα Κεφαλής", desc: "Πλήρες ξύρισμα με ζεστή πετσέτα", price: "€15" },
      { name: "Τακτοποίηση Γενιών", desc: "Σχηματισμός, περίγραμμα και ορισμός", price: "€8" },
      { name: "Μαλλιά & Γένια", desc: "Πλήρες κούρεμα και περιποίηση γενιών", price: "€18" },
      { name: "Ξύρισμα με Ζεστή Πετσέτα", desc: "Παραδοσιακό ξύρισμα με ξυράφι", price: "€20" },
    ],
  },
  en: {
    label: "What We Offer",
    heading: <>Services &amp;<br /><em style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic" }}>Prices</em></>,
    hairCat: "Hair",
    beardCat: "Beard & Shave",
    note: "Prices are indicative. For more information, give us a call.",
    services: [
      { name: "Men's Haircut", desc: "Scissor or clipper cut, styled to finish", price: "€12" },
      { name: "Kids Haircut", desc: "Under 12 years old", price: "€8" },
      { name: "Head Shave", desc: "Full head razor shave with hot towel", price: "€15" },
      { name: "Beard Trim", desc: "Shaped, edged and defined", price: "€8" },
      { name: "Hair & Beard", desc: "Full cut plus beard treatment", price: "€18" },
      { name: "Hot Towel Shave", desc: "Traditional straight razor shave", price: "€20" },
    ],
  },
};

export default function Services({ lang }) {
  const tx = t[lang];
  const hair = tx.services.slice(0, 3);
  const beard = tx.services.slice(3);
  return (
    <section id="services">
      <div className="inner">
        <div className="section-label">{tx.label}</div>
        <h2 className="section-title">{tx.heading}</h2>
        <div className="services-layout">
          <div>
            <div className="service-category">
              <div className="service-cat-title">{tx.hairCat}</div>
              {hair.map(s => (
                <div className="service-item" key={s.name}>
                  <div>
                    <div className="service-name">{s.name}</div>
                    <div className="service-desc">{s.desc}</div>
                  </div>
                  <div className="service-price">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="service-category">
              <div className="service-cat-title">{tx.beardCat}</div>
              {beard.map(s => (
                <div className="service-item" key={s.name}>
                  <div>
                    <div className="service-name">{s.name}</div>
                    <div className="service-desc">{s.desc}</div>
                  </div>
                  <div className="service-price">{s.price}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="services-note">{tx.note}</div>
      </div>
    </section>
  );
}

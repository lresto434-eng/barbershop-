const t = {
  el: {
    label: "Τι Προσφέρουμε",
    heading: <>Υπηρεσίες &amp;<br /><em style={{ fontFamily: "'Playfair Display',serif", fontStyle: "italic" }}>Τιμές</em></>,
    hairCat: "Μαλλιά",
    beardCat: "Γένια & Ξύρισμα",
    note: "Οι τιμές είναι ενδεικτικές. Για περισσότερες πληροφορίες, τηλεφωνήστε μας.",
    services: [
      { name: "Ανδρικό Κούρεμα", desc: "Κούρεμα με ψαλίδι ή μηχανή, φινίρισμα με στυλ", price: "€12" },
      { name: "Παιδικό & Τρίτης Ηλικίας", desc: "Ειδική τιμή για παιδιά και ηλικιωμένους", price: "€9" },
      { name: "Λούσιμο Μαλλιών", desc: "Χαλαρωτικό λούσιμο με ποιοτικά προϊόντα", price: "€3" },
      { name: "Τακτοποίηση Γενιών", desc: "Σχηματισμός, περίγραμμα και ορισμός", price: "€5" },
      { name: "Παραδοσιακό Ξύρισμα με Ξυράφι", desc: "Κλασικό ξύρισμα με ευθύ ξυράφι", price: "€10" },
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
      { name: "Kids' & Seniors' Haircut", desc: "Special rate for children and seniors", price: "€9" },
      { name: "Hair Wash", desc: "Relaxing wash with quality products", price: "€3" },
      { name: "Beard Trim", desc: "Shaped, edged and defined", price: "€5" },
      { name: "Traditional Straight Razor Shave", desc: "Classic straight razor shave", price: "€10" },
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

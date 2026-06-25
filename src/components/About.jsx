const t = {
  el: {
    label: "Η Ιστορία Μας",
    heading: <>Γνώρισε<br /><em>τον Σάββα</em></>,
    photo: "Φωτογραφία Σύντομα",
    quote: "«Ένα κουρείο πρέπει να μοιάζει με δεύτερο σπίτι — εκεί που κάθεσαι, ξεφυσάς και φεύγεις στα καλύτερά σου.»",
    p1: "Ο Σάββας έχτισε το Old Fashioned πάνω σε μια απλή πεποίθηση: ότι ένα καλό κούρεμα είναι κάτι παραπάνω από ψαλίδι και καθρέπτης. Είναι υπομονή, προσοχή και η τέχνη που δεν μπορεί να βιαστεί. Μετά από χρόνια τελειοποίησης της τέχνης του, άνοιξε το δικό του κουρείο στην Καλαμαριά — ένα μέρος όπου κάθε πελάτης ζει την πλήρη εμπειρία.",
    p2: "Το Old Fashioned δεν είναι αλυσίδα. Δεν υπάρχουν οθόνες, ούτε σειρές αναμονής, ούτε άγνωστοι. Μόνο ένας κουρέας, τα εργαλεία του και μια παλιομοδίτικη αφοσίωση στο να κάνει τη δουλειά σωστά.",
    sig: "— Σάββας",
  },
  en: {
    label: "Our Story",
    heading: <>Meet<br /><em>Savvas</em></>,
    photo: "Photo Coming Soon",
    quote: "\"A barbershop should feel like a second home — where you sit down, breathe out, and leave looking your best.\"",
    p1: "Savvas built Old Fashioned on a simple belief: that a great haircut is more than just scissors and a mirror. It is patience, attention, and the kind of craft that cannot be rushed. After years spent perfecting his trade, he opened his own shop in Kalamaria — a place where every client gets the full experience.",
    p2: "Old Fashioned is not a chain. There are no screens, no conveyor belts, no strangers. Just one barber, his tools, and an old-school dedication to doing the job right.",
    sig: "— Savvas",
  },
};

export default function About({ lang }) {
  const tx = t[lang];
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
            <span>{tx.photo}</span>
          </div>
          <div className="about-content">
            <div className="section-label">{tx.label}</div>
            <h2 className="section-title">{tx.heading}</h2>
            <blockquote className="about-quote">{tx.quote}</blockquote>
            <p className="about-text">{tx.p1}</p>
            <p className="about-text">{tx.p2}</p>
            <div className="about-sig">{tx.sig}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

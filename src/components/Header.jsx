import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const t = {
  el: { about: "Σχετικά", services: "Υπηρεσίες", gallery: "Γκαλερί", blog: "Blog", hours: "Ωράριο", contact: "Επικοινωνία", book: "Ραντεβού", bookNow: "Κλείσε Τώρα" },
  en: { about: "About", services: "Services", gallery: "Gallery", blog: "Blog", hours: "Hours", contact: "Contact", book: "Book", bookNow: "Book Now" },
};

export default function Header({ onBook, lang, onToggleLang }) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const tx = t[lang];

  function closeNav() { setOpen(false); }

  function goToSection(e, id) {
    e.preventDefault();
    closeNav();
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }

  return (
    <header>
      <a className="logo" href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
        <span className="logo-top">Old Fashioned</span>
        <span className="logo-bottom">Barbershop</span>
      </a>
      <nav id="navLinks" className={open ? "open" : ""}>
        <a href="#about" onClick={(e) => goToSection(e, "about")}>{tx.about}</a>
        <a href="#services" onClick={(e) => goToSection(e, "services")}>{tx.services}</a>
        <a href="#gallery" onClick={(e) => goToSection(e, "gallery")}>{tx.gallery}</a>
        <a href="#blog" onClick={(e) => goToSection(e, "blog")}>{tx.blog}</a>
        <a href="#hours" onClick={(e) => goToSection(e, "hours")}>{tx.hours}</a>
        <a href="#contact" onClick={(e) => goToSection(e, "contact")}>{tx.contact}</a>
        <button type="button" className="nav-book-btn" onClick={() => { closeNav(); onBook(); }}>{tx.book}</button>
      </nav>
      <div className="header-right">
        <button
          type="button"
          onClick={onToggleLang}
          style={{ background: "none", border: "1px solid rgba(255,255,255,0.3)", color: "inherit", cursor: "pointer", fontFamily: "inherit", fontSize: "0.75rem", letterSpacing: "0.08em", padding: "0.3rem 0.6rem", borderRadius: "3px", marginRight: "0.75rem" }}
        >
          {lang === "el" ? "EN" : "ΕΛ"}
        </button>
        <button className="btn-book" type="button" onClick={onBook}>{tx.bookNow}</button>
        <button className="hamburger" type="button" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

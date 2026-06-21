import { useState } from "react";

export default function Header({ onBook }) {
  const [open, setOpen] = useState(false);

  function closeNav() { setOpen(false); }

  return (
    <header>
      <a className="logo" href="#">
        <span className="logo-top">Old Fashioned</span>
        <span className="logo-bottom">Barbershop</span>
      </a>
      <nav id="navLinks" className={open ? "open" : ""}>
        <a href="#about" onClick={closeNav}>About</a>
        <a href="#services" onClick={closeNav}>Services</a>
        <a href="#gallery" onClick={closeNav}>Gallery</a>
        <a href="#hours" onClick={closeNav}>Hours</a>
        <a href="#contact" onClick={closeNav}>Contact</a>
        <button type="button" className="nav-book-btn" onClick={() => { closeNav(); onBook(); }}>Book</button>
      </nav>
      <div className="header-right">
        <button className="btn-book" type="button" onClick={onBook}>Book Now</button>
        <button className="hamburger" type="button" aria-label="Menu" onClick={() => setOpen(o => !o)}>
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}

import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import HoursLocation from "./components/HoursLocation";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Header onBook={() => setModalOpen(true)} />
      <main>
        <Hero onBook={() => setModalOpen(true)} />
        <About />
        <Services />
        <Gallery />
        <HoursLocation />
        <Contact onBook={() => setModalOpen(true)} />
      </main>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

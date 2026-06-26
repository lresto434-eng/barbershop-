import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import HoursLocation from "./components/HoursLocation";
import Contact from "./components/Contact";
import BookingModal from "./components/BookingModal";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [lang, setLang] = useState("el");

  return (
    <BrowserRouter>
      <Header onBook={() => setModalOpen(true)} lang={lang} onToggleLang={() => setLang(l => l === "el" ? "en" : "el")} />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero onBook={() => setModalOpen(true)} lang={lang} />
            <About lang={lang} />
            <Services lang={lang} />
            <Gallery lang={lang} />
            <Blog lang={lang} />
            <HoursLocation lang={lang} />
            <Contact onBook={() => setModalOpen(true)} lang={lang} />
          </main>
        } />
        <Route path="/blog/:slug" element={<BlogPost lang={lang} />} />
      </Routes>
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} lang={lang} />
    </BrowserRouter>
  );
}

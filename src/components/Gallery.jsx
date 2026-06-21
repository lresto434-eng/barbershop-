const GalleryIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <path d="M21 15l-5-5L5 21" />
  </svg>
);

const items = [
  "Shop Photo", "Haircut", "Beard Work", "The Chair", "Detail", "Hot Shave"
];

export default function Gallery() {
  return (
    <section id="gallery">
      <div className="inner">
        <div className="section-label">The Shop</div>
        <h2 className="section-title">Gallery</h2>
        <div className="gallery-grid">
          {items.map((label) => (
            <div className="gallery-item" key={label}>
              <div className="gallery-placeholder">
                <GalleryIcon />
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

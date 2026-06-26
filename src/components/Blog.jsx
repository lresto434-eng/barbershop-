import { useEffect, useState } from "react";

const API_URL = import.meta.env.VITE_API_URL;

const t = {
  el: {
    label: "Το Blog Μας",
    heading: <>Άρθρα &amp;<br /><em>Συμβουλές</em></>,
    loading: "Φόρτωση...",
    empty: "Δεν υπάρχουν άρθρα ακόμα.",
    error: "Αδυναμία φόρτωσης άρθρων.",
    readMore: "Διαβάστε περισσότερα",
  },
  en: {
    label: "Our Blog",
    heading: <>Articles &amp;<br /><em>Tips</em></>,
    loading: "Loading...",
    empty: "No posts yet.",
    error: "Could not load posts.",
    readMore: "Read more",
  },
};

function formatDate(dateStr, lang) {
  return new Date(dateStr).toLocaleDateString(
    lang === "el" ? "el-GR" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );
}

export default function Blog({ lang }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const tx = t[lang];

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <section id="blog">
      <div className="inner">
        <div className="section-label">{tx.label}</div>
        <h2 className="section-title">{tx.heading}</h2>

        {loading && <p style={{ textAlign: "center", opacity: 0.6 }}>{tx.loading}</p>}
        {error && <p style={{ textAlign: "center", opacity: 0.6 }}>{tx.error}</p>}
        {!loading && !error && posts.length === 0 && (
          <p style={{ textAlign: "center", opacity: 0.6 }}>{tx.empty}</p>
        )}

        <div className="blog-grid">
          {posts.map((post) => (
            <div className="blog-card" key={post.id}>
              {post.cover_image && (
                <img src={post.cover_image} alt={post.title} className="blog-card-img" />
              )}
              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.category}</span>
                  <span className="blog-card-date">{formatDate(post.published_at, lang)}</span>
                </div>
                <h3 className="blog-card-title">
                  {lang === "en" && post.title_en ? post.title_en : post.title}
                </h3>
                <p className="blog-card-summary">
                  {lang === "en" && post.summary_en ? post.summary_en : post.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

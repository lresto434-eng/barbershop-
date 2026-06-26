import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

const t = {
  el: {
    loading: "Φόρτωση...",
    error: "Το άρθρο δεν βρέθηκε.",
    back: "← Πίσω στο Blog",
  },
  en: {
    loading: "Loading...",
    error: "Post not found.",
    back: "← Back to Blog",
  },
};

function formatDate(dateStr, lang) {
  return new Date(dateStr).toLocaleDateString(
    lang === "el" ? "el-GR" : "en-GB",
    { day: "numeric", month: "long", year: "numeric" }
  );
}

export default function BlogPost({ lang }) {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const tx = t[lang];

  useEffect(() => {
    fetch(`${API_URL}/posts/${slug}`, { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) { setError(true); }
        else { setPost(data); }
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="blog-post-page"><p>{tx.loading}</p></div>;
  if (error) return <div className="blog-post-page"><p>{tx.error}</p></div>;

  const title = lang === "en" && post.title_en ? post.title_en : post.title;
  const content = lang === "en" && post.content_en ? post.content_en : post.content;

  return (
    <div className="blog-post-page">
      <div className="inner">
        <button className="blog-back-btn" onClick={() => navigate("/")} type="button">
          {tx.back}
        </button>
        {post.cover_image && (
          <img src={post.cover_image} alt={title} className="blog-post-img" />
        )}
        <div className="blog-post-meta">
          <span className="blog-card-category">{post.category}</span>
          <span className="blog-card-date">{formatDate(post.published_at, lang)}</span>
        </div>
        <h1 className="blog-post-title">{title}</h1>
        <div className="blog-post-content">{content}</div>
      </div>
    </div>
  );
}

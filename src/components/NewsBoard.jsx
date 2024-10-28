import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);  // For loading state
  const [error, setError] = useState(null);      // For error handling

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);  // Start loading
      setError(null);    // Reset error before new request
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.ok) {
          setArticles(data.articles);  // Set articles if the request is successful
        } else {
          throw new Error(data.message || "Something went wrong");
        }
      } catch (err) {
        setError(err.message);  // Set error message if request fails
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      {/* Loading state */}
      {loading && <p>Loading news...</p>}

      {/* Error state */}
      {error && <p>Error: {error}</p>}

      {/* News articles */}
      {!loading && !error && articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
          />
        ))
      ) : (
        !loading && !error && <p>No news available for this category</p>  // Fallback message for no articles
      )}
    </div>
  );
};

export default NewsBoard;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Article, NewsApiResponse } from '../types'; 

const News: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get<NewsApiResponse>(
          'https://api.spaceflightnewsapi.net/v4/articles?limit=10'
        );
        setArticles(response.data.results);
      } catch (err) {
        setError('Lỗi khi tải tin tức.');
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <p>Đang tải tin tức...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div className="card">
      <h2>Tin tức</h2>
      {articles.map((article) => (
        <div key={article.id} className="news-item">
          <img src={article.image_url} alt={article.title} />
          <div className="news-item-content">
            <h3>{article.title}</h3>
            <p>{article.summary}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Đọc thêm tại đây
            </a>
            <p className="date">
              Ngày đăng: {new Date(article.published_at).toLocaleDateString('vi-VN')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default News;

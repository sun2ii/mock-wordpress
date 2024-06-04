import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FeedReader = ({ feedUrl }) => {
  const [feed, setFeed] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await axios.get('http://localhost:4000/rss', {
          params: { url: feedUrl },
        });
        setFeed(response.data.items);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchFeed();
  }, [feedUrl]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <h1>RSS Feed</h1>
      <ul>
        {feed.map((item, index) => (
          <li key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.title}
            </a>
            <p>{item.contentSnippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedReader;

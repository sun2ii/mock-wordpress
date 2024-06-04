import React from 'react';
import FeedReader from '../components/FeedReader';

const Home = () => {
  const feedUrl = "https://rss.beehiiv.com/feeds/ofF1VNf5mO.xml";
  
  return (
    <div>
      <h1>Welcome to the Pragmatic Engineer Newsletter</h1>
      <p>Your go-to resource for the latest in software engineering.</p>
      <FeedReader feedUrl={feedUrl} />
    </div>
  );
};

export default Home;

/* eslint-disable no-undef */
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsComponent = () => {
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines', {
          params: {
            // Include any required API parameters here
            apiKey: process.env.NEWS_API_KEY,

            // Other parameters like country, category, etc.
            country: 'us', // Replace with desired country code

            // Replace with desired category 
            // (e.g., 'sports', 'business', 'entertainment', 'health', 'science', 'politics', 'sports-football', 'sports-cricket', etc.)
            category: 'sports', 
          },
        });
        
        const newsData = response.data.articles;
        const randomIndex = Math.floor(Math.random() * newsData.length);
        setNewsItem(newsData[randomIndex]);
      } catch (error) {
        console.error('Error fetching news data:', error);
      }
    };

    fetchNews();
  }, []);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img src={newsItem.urlToImage} />
      <p>{newsItem.description}</p>
      <a href={newsItem.url} target="_blank">Read more</a>
    </div>
  );
};

export default NewsComponent;

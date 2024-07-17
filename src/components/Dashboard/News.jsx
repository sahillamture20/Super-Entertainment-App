/* eslint-disable no-undef */
import { useState, useEffect } from "react";
import axios from "axios";

const News = () => {
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              // Include any required API parameters here
              apiKey: process.env.NEWS_API_KEY,

              // Other parameters like country, category, etc.
              country: "us", // Replace with desired country code

              // Replace with desired category
              // (e.g., 'sports', 'business', 'entertainment', 'health', 'science', 'politics', 'sports-football', 'sports-cricket', etc.)
              category: "",
            },
          }
        );

        const newsData = response.data.articles;
        const randomIndex = Math.floor(Math.random() * newsData.length);
        // console.log(newsData);
        setNewsItem(newsData[randomIndex]);
      } catch (error) {
        console.error("Error fetching news data:", error);
      }
    };

    fetchNews();
  }, []);

  if (!newsItem) {
    return <div>Loading...</div>;
  }

  return (
    <div className="rounded-xl h-96 overflow-hidden mt-2">
      <img
        src={newsItem.urlToImage}
        className="object-cover w-full h-44"
        alt="News"
      />
      <div className="bg-white text-black text-sm p-2 overflow-y-auto max-h-54 rounded-b-xl">
        <h2 className="text-base font-bold line-clamp-5">{newsItem.title}</h2>
        <p className="text-xs line-clamp-5">{newsItem.description}</p>
        <a href={newsItem.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
          Read more
        </a>
      </div>
    </div>
  );
};

export default News;

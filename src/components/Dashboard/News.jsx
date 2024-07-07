import { useState, useEffect } from "react"


function News() {
    const [news, setNews] = useState(null);
    useEffect(() => {
      fetch(
        "https://api.webz.io/newsApiLite?token=ceaa7503-85db-4626-9ae5-5f882cfd6d51&q=music"
      )
        .then((response) => response.json())
        .then((data) => setNews(data));
    }, []);
    function createMarkup() {
      return { __html: news ? news.posts[0].highlightText : <h1>Loading...</h1> };
    }
    // const random = Math.floor(Math.random() * 100);
  
    return (
      <div>
        <h1>News</h1>
        {news ? (
          <div>
            <p> {news.posts[0].title}</p>
            {/* <p dangerouslySetInnerHTML={_html:news.posts[0].highlightText}></p> */}
            <p dangerouslySetInnerHTML={createMarkup()}></p>
            <img src={news.posts[0].thread.main_image} alt="news" />
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
  )
}

export default News
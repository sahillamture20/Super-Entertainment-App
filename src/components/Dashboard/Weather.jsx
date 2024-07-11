import { useState, useEffect } from "react";
export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const url =
      "https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&location=Delhi%2C%20India&contentType=json&unitGroup=metric&shortColumnNames=false";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "2203f925d2mshc4d829150064a10p1e34f7jsn0510d0d703b8",
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
      },
    };

    try {
      fetch(url, options)
        .then((response) => response.json())
        .then((data) => data.locations["Delhi, India"].currentConditions)
        .then((data) => setWeatherData(data));
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <div>
      <h1>Weather</h1>
      {weatherData ? (
        <>
          <p>Temperature: {weatherData.temp}</p>
          <p>Wind: {weatherData.wspd}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <p>Heat Index: {weatherData.heatindex}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
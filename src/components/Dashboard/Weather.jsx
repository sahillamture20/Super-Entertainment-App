import { useState, useEffect } from "react";
import line from "../../assets/Line2.png";
import pressureImg from "../../assets/Pressure.png";
import windImg from "../../assets/wind.png";
import humidityImg from "../../assets/humidity.png";

export default function Weather() {
  const [weatherData, setWeatherData] = useState(null);

  //Weather api
  useEffect(() => {
    const fetchWeatherData = async () => {
      const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=India";
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "7a4b23f003msh5e2427c455fa21ep18631ejsn9999ddf27eb8",
          "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json(); // Use .json() to parse the response
        // console.log(result)
        setWeatherData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <div>
      {weatherData ? (
        <div className="h-40 rounded-xl bg-[#101744] flex flex-col gap-y-3">
          <div className="bg-[#FF4ADE] rounded-tr-xl rounded-tl-xl text-center text-xl font-bold">
            <p>{weatherData.location.localtime}</p>
          </div>
          <div className="flex items-center justify-evenly">
            <div className="flex flex-col gap-y-3 justify-center items-center">
              <img
                className="w-12"
                src={weatherData.current.condition.icon}
                alt="Weather"
              />
              <p className="text-center w-20 text-sm">
                {weatherData.current.condition.text}
              </p>
            </div>
            <img src={line} />
            <div className="text-center flex flex-col gap-y-3">
              <p className="text-2xl font-semibold">
                {weatherData.current.temp_c} °C
              </p>
              <div className="flex gap-x-2 items-center">
                <img src={pressureImg} alt="pressure" className="h-6" />
                <p className="text-sm">
                  {weatherData.current.pressure_mb} mbar
                  <br />
                  Pressure
                </p>
              </div>
            </div>
            <img src={line} />
            <div className="text-sm flex flex-col gap-y-3">
              <div className="flex gap-x-2 items-center">
                <img src={windImg} alt="wind" className="h-4" />
                <p>
                  {weatherData.current.wind_kph} km/h
                  <br />
                  Wind
                </p>
              </div>
              <div className="flex gap-2">
                <img src={humidityImg} alt="humidity" className="h-4 w-3" />
                <p>{weatherData.current.humidity} Humidity</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

import axios from "axios";
import React, { useEffect, useState } from "react";
import ForecastDate from "./ForecastDate";

const WeatherForecasts = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const latitude = props.forecast.lat;
    const longitude = props.forecast.lon;
    const apiKey = "923547b647729c17b92586beaa08e99c";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then((response) => {
      const filteredForecasts = [];

      const forecastList = response.data.list;
      const seenDates = new Set();

      forecastList.map((item) => {
        const date = item.dt_txt.split(" ")[0];
        const time = item.dt_txt.split(" ")[1];

        // Only take one forecast per day, ideally around 12:00
        if (time === "12:00:00" && !seenDates.has(date)) {
          seenDates.add(date);
          filteredForecasts.push(item);
        }
      });

      // If less than 5 were collected, fill with remaining unique dates
      if (filteredForecasts.length < 5) {
        forecastList.map((item) => {
          const date = item.dt_txt.split(" ")[0];
          if (!seenDates.has(date)) {
            seenDates.add(date);
            filteredForecasts.push(item);
          }
        });
      }

      setForecastData(filteredForecasts.slice(0, 5));
      setLoaded(true);
    });
  }, [props.forecast]);

  if (!loaded) {
    return <div>Loading forecast...</div>;
  }

  return (
    <div className="weather-forcasts">
      {forecastData.map((dailyForecast, index) => (
        <div className="weather-day" key={index}>
          <ForecastDate list={dailyForecast} />
        </div>
      ))}
    </div>
  );
};

export default WeatherForecasts;

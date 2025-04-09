import axios from "axios";
import React, { use, useState } from "react";
import ForecastDate from "./ForecastDate";

const WeatherForecast = (props) => {
  const [loaded, setLoaded] = useState(false);
  const [forecastData, setForecastData] = useState(null);

  function showForecast(response) {
    setLoaded(true);
    setForecastData(response.data.list);
    console.log(response.data)
  }

  if (loaded) {
    return (
      <div className="weather-forcasts">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="weather-day" key={index}>
                <ForecastDate list={dailyForecast} />
              </div>
            );
          } else{
            return(null)
          }
        })}
      </div>
    );
  } else {
    let latitude = props.forecast.lat;
    let longitude = props.forecast.lon;
    let apiKey = "923547b647729c17b92586beaa08e99c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);
  }
};

export default WeatherForecast;

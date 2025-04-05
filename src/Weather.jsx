import React from "react";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [display, setDisplay] = useState(false);
  const [updateWeather, setUpdateWeather] = useState("");

  function handleTemperature(response) {
    console.log(response.data);
    setDisplay(true);

    setUpdateWeather({
      temperature: response.data.temperature.current,
      city: response.data.city,
      date: new Date(response.data.time * 1000),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
    });
  }
  function handleSearch(){
    let apiKey = "8703ffd45fec607afo9ae4ed13140bt8";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleTemperature);
  }

  function showTemperature(event) {
    event.preventDefault();
    handleSearch()
  }

  function updateCity(event){
    setCity(event.target.value);
  }

  if (display) {
    return (
      <>
        <header>
          <form onSubmit={showTemperature}>
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="weather-form-search"
              onChange={updateCity}
            />
            <input
              type="submit"
              value="Search"
              required
              className="weather-form-submit"
            />
          </form>
        </header>

        <WeatherInfo data={updateWeather} />
      </>
    );
  } else {
    handleSearch()
    return <p> Loading...</p>;
  }
};

export default Weather;

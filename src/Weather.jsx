import React from "react";
import { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";
import WeatherForecasts from "./WeatherForecasts";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [display, setDisplay] = useState(false);
  const [updateWeather, setUpdateWeather] = useState("");

  function handleTemperature(response) {
    setDisplay(true);

    setUpdateWeather({
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinate: response.data.coord,
    });
  }
  function handleSearch() {
    let apiKey = "923547b647729c17b92586beaa08e99c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleTemperature);
  }

  function showTemperature(event) {
    event.preventDefault();
    handleSearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (display) {
    return (
      <>
        <header>
          <form onSubmit={showTemperature} className="max-w-screen sm:max-w-full flex">
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="p-4 my-2 mx-2 border-gray-300 rounded-lg w-full bg-[#f8f7fd]"
              onChange={updateCity}
            />
            <input
              type="submit"
              value="Search"
              required
              className="w-45 my-2 mx-2 bg-[#885ef2] sm:text-base text-white font-semibold  rounded-lg hover:bg-blue-600 transition-colors"
            />
          </form>
        </header>

        <WeatherInfo data={updateWeather} />
        {/* <WeatherForecast forecast={updateWeather.coordinate}/> */}
        <WeatherForecasts forecast={updateWeather.coordinate}/>
      </>
    );
  } else {
    handleSearch();
    return <p> Loading...</p>;
  }
};

export default Weather;

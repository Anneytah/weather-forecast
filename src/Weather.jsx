import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
// import WeatherForecast from "./WeatherForecast";
import WeatherForecasts from "./WeatherForecasts";

const Weather = (props) => {
  const [city, setCity] = useState(props.defaultCity);
  const [display, setDisplay] = useState(false);
  const [updateWeather, setUpdateWeather] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check for geolocation support
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          let apiKey = "923547b647729c17b92586beaa08e99c";
          let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

          axios
            .get(apiUrl)
            .then(handleTemperature)
            .catch(() => {
              // If location request fails, fallback to default city
              handleSearch();
            });
        },
        (error) => {
          // If permission denied or any error, fallback to default city
          handleSearch();
        }
      );
    } else {
      // If geolocation is not supported, fallback to default city
      handleSearch();
    }
  }, []);

  function handleTemperature(response) {
    setDisplay(true);
    setError(null);
    setLoading(false);

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

    axios
      .get(apiUrl)
      .then(handleTemperature)
      .catch(() => {
        setError("City doesn't exist! Enter a Valid city.");
        setUpdateWeather(null);
        setDisplay(true);
        setLoading(false);
      });
  }

  function showTemperature(event) {
    event.preventDefault();
    handleSearch();
  }

  function updateCity(event) {
    setCity(event.target.value);
    setError(null);
  }

  if (display) {
    return (
      <>
        <header>
          <form
            onSubmit={showTemperature}
            className="max-w-screen sm:max-w-full flex"
          >
            <input
              type="search"
              placeholder="Enter a city.."
              required
              className="p-4 my-2 mx-2 border-gray-300 rounded-lg  lg:w-full bg-[#f8f7fd]"
              onChange={updateCity}
            />
            <input
              type="submit"
              value="Search"
              required
              className="w-45  cursor-pointer sm:text-sm my-2 mx-2 bg-[#885ef2] text-white font-semibold rounded-lg hover:bg-[#aa94eb] transition-colors"
            />
          </form>
        </header>

        {error && (
          <p className="text-[#885ef2] text-lg font-medium py-5">{error}</p>
        )}

        {loading && (
          <p className="text-[#885ef2] py-5">Loading weather data...</p>
        )}

        {updateWeather && (
          <>
            <WeatherInfo data={updateWeather} />
            <WeatherForecasts forecast={updateWeather.coordinate} />
          </>
        )}
      </>
    );
  } else {
    handleSearch();
    return <p className="text-[#885ef2]"> Loading...</p>;
  }
};

export default Weather;

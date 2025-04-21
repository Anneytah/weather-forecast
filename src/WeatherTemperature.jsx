import { useState } from "react";
import React from "react";

const WeatherTemperature = (props) => {
  const [unit, setUnit] = useState("celsius");
  function handleFarenheit(event) {
    event.preventDefault();
    setUnit("Farenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit == "celsius") {
    return (
      <div className="flex">
        <div className="weather-temperature">{Math.round(props.celsius)}</div>
        <div className="weather-app-unit">
          &deg;C{" "}
          <a href="/" onClick={handleFarenheit}>
          &deg;F
          </a>
        </div>
      </div>
    );
  } else {
    let farenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="flex">
        <div className="weather-temperature">{Math.round(farenheit)}</div>
        <div className="weather-app-unit">
          <a href="/" onClick={showCelsius}>
            &deg;C
          </a>{" "}
          &deg;F
        </div>
      </div>
    );
  }
};

export default WeatherTemperature;

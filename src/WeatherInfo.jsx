import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <div>
      <main>
        <div className="flex justify-between flex-col md:flex-row gap-4">
          <div>
            <h1 className="font-bold text-4xl m-0">{props.data.city}</h1>
            <div className="time">
              <FormattedDate date={props.data.date} />
              <span className="capitalize"> {props.data.description} </span> <br />
              Humidity:
              <strong className="weather-humidity">
                {""} {props.data.humidity}%
              </strong>
              , Wind:
              <strong className="weather-wind">
                {""} {Math.round(props.data.wind)}km/h
              </strong>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="mt-4">
              <WeatherIcon code={props.data.icon} size={64} />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherInfo;

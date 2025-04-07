import React from 'react'
import FormattedDate from "./FormattedDate";
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';


const WeatherInfo = (props) => {
  return (
    <div>
        <main>
          <div className="main-body">
            <div>
                  <h1 className="heading">{props.data.city}</h1>
              <div className="time" >
                <FormattedDate date={props.data.date} />
                <span> {props.data.description} </span>{" "}
                <br />
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
            <div className="weather-temperature-body">
              <div className= "icon">
                <WeatherIcon code={props.data.icon}/>
              </div>
              <WeatherTemperature celsius = {props.data.temperature} />
            </div>
          </div>
        </main>

    </div>
  )
}

export default WeatherInfo
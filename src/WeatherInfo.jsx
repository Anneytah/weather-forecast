import React from 'react'
import FormattedDate from "./FormattedDate";


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
              <div>
                <img src={props.data.icon} alt={props.data.description}/>
              </div>
              <div className="weather-temperature">{Math.round(props.data.temperature)}</div>
              <div className="weather-app-unit">
                &deg;C
              </div>
            </div>
          </div>
        </main>

    </div>
  )
}

export default WeatherInfo
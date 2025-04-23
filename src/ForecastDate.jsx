import React from 'react'
import WeatherIcon from "./WeatherIcon";


const ForecastDate = (props) => {

    function day(){
        let date = new Date(props.list.dt * 1000);
        let day = date.getDay()
        let days = [ "Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"]
        
        return days[day];
        
    }

  return (
    <div>
        <div className="font-extralight text-center text-[#c0bdc5]">{day()}</div>
            <div className="sm:p-3 lg:px-10 p-2">
              {<WeatherIcon code={props.list.weather[0].icon} size={45}  />}
            </div>
            <div className="flex justify-center text-[#f65282]">
              <div className="temperature-unit">
                <strong>{Math.round(props.list.main.temp_max)}&deg;</strong>
              </div>
              <div className="temperature-unit">{Math.round(props.list.main.temp_min)}&deg;</div>
            </div>
    </div>
  )
}

export default ForecastDate
import React from 'react'

const FormattedDate = (props) => {
    let minutes = props.date.getMinutes();
    let hours = props.date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[props.date.getDay()];
  
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
    if (hours < 10) {
      hours = `0${hours}`;
    }
  return (
    <div>{day} {hours}:{minutes}</div>
  )
}

export default FormattedDate;
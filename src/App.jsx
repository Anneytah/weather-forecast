import React from "react";
import "./App.css";
import Logos from "./images/Logos.png";
import Weather from "./Weather";

function App() {
  return (
    <>
      <div className="weather-app body">
        <img src={Logos} alt="SheCodes Logo" className="logo" />
        <Weather defaultCity="Miami" />

        <footer className="weather-footer">
          This project was coded by
          <a href="https://github.com/Anneytah" target="_blank">
            {""} Aniago Somtochukwu
          </a>
          , is
          <a
            href="https://github.com/Anneytah/Advanced-WeatherApp"
            target="_blank"
          >
            {""} open-sourced on GitHub
          </a>{" "}
          and
          <a href="https://advancedweatherapp25.netlify.app/" target="_blank">
            {""} hosted on Netlify
          </a>
        </footer>
      </div>
    </>
  );
}

export default App;

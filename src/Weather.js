import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  let [city, setCity] = useState("Sydney");
  let [weather, setWeather] = useState({});

  useEffect(() => {
    let api_key = "b2a5adcct04b33178913oc335f405433";
    let api_url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api_key}&units=metric`;
    axios.get(api_url).then((response) => {
      setWeather({
        cityResult: response.data.city,
        temperature: response.data.temperature.current,
        condition: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
      });
    });
  }, []);

  function handleClick(event) {
    event.preventDefault();

    let api_key = "b2a5adcct04b33178913oc335f405433";
    let api_url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${api_key}&units=metric`;
    axios.get(api_url).then((response) => {
      setWeather({
        cityResult: response.data.city,
        temperature: response.data.temperature.current,
        condition: response.data.condition.description,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        icon: response.data.condition.icon_url,
      });
    });
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleClick}>
      <input
        type="search"
        placeholder="Enter a city.."
        className="search-form-input"
        onChange={updateCity}
        autoFocus={true}
      />
      <input type="submit" value="Search" className="search-form-submit" />
    </form>
  );

  return (
    <div className="container">
      <div className="weather-app">
        <header>{form}</header>
        <main>
          <div className="weather-app-data">
            <div>
              <h1 className="weather-app-city" id="city">
                {weather.cityResult}
              </h1>
              <p className="weather-app-details">
                <span id="time">Monday 11:45</span>,{" "}
                <span id="description">{weather.condition}</span>
                <br />
                Humidity: <strong id="humidity">{weather.humidity} %</strong>,
                Wind:
                <strong id="windSpeed"> {weather.wind} km/h</strong>
              </p>
            </div>
            <div className="weather-app-temperature-container">
              <div className="weather-app-icon" id="icon">
                <img src={weather.icon} alt="weather condition icon" />
              </div>
              <div className="weather-app-temperature-value" id="temperature">
                {Math.round(weather.temperature)}
              </div>
              <div className="weather-app-temperature-unit">°C</div>
            </div>
          </div>
          <div className="weather-forecast" id="forecast">
            <div>
              Tue
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                alt="weather condition icon"
              />
              <div className="weather-forecast-temperatures">
                <div
                  className="
                    weather-forecast-temperature"
                >
                  28°
                </div>
                <div
                  className="
                    weather-forecast-temperature"
                >
                  22°
                </div>
              </div>
            </div>
            <div>
              Tue
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                alt="weather condition icon"
              />
              <div className="weather-forecast-temperatures">
                <div
                  className="
                    weather-forecast-temperature"
                >
                  28°
                </div>
                <div
                  className="
                    weather-forecast-temperature"
                >
                  22°
                </div>
              </div>
            </div>
            <div>
              Tue
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                alt="weather condition icon"
              />
              <div className="weather-forecast-temperatures">
                <div
                  className="
                    weather-forecast-temperature"
                >
                  28°
                </div>
                <div
                  className="
                    weather-forecast-temperature"
                >
                  22°
                </div>
              </div>
            </div>
            <div>
              Tue
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                alt="weather condition icon"
              />
              <div className="weather-forecast-temperatures">
                <div
                  className="
                    weather-forecast-temperature"
                >
                  28°
                </div>
                <div
                  className="
                    weather-forecast-temperature"
                >
                  22°
                </div>
              </div>
            </div>
            <div>
              Tue
              <img
                src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"
                alt="weather condition icon"
              />
              <div className="weather-forecast-temperatures">
                <div
                  className="
                    weather-forecast-temperature"
                >
                  28°
                </div>
                <div
                  className="
                    weather-forecast-temperature"
                >
                  22°
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

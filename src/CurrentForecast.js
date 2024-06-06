import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeeklyForecast from "./WeeklyForecast";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function CurrentForecast(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature:response.data.main.temp,
      wind:response.data.wind.speed,
      humidity:response.data.main.humidity,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
      city: response.data.name,
      coordinates: response.data.coord,
      
    });
  }

  function search() {
    const apiKey= "445905dadb3d2b0c6f1b916c9d0e3860";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
setCity(event.target.value);
  }

  if(weatherData.ready) {
    return (
    <div className="container">
      <div class="row" id="button-row ">
        <div class="col">
          <form onSubmit={handleSubmit} id="search-form">
            <input
              type="text"
              placeholder="Enter city"
              autofocus="on"
              autocomplete="off"
              id="search-text-input"
              onChange={handleCityChange}
            />
            <input type="submit" value="search" />
          </form>
          <WeatherInfo data={weatherData} />
          <WeeklyForecast coordinates={weatherData.coordinates}/>
        </div>
        </div>
        </div>       
     );
} else {
  search();
  return "loading...";
}
}
  

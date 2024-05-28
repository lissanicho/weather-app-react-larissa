import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function CurrentForecast(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      temperature:response.data.main.temp,
      wind:12,
      humidity:response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      city: response.data.name
    });
  }

  if(weatherData.ready) {
    return (
    <div className="container">
      <div className="Searchbar">
      <div class="row" id="button-row ">
        <div class="col-8">
          <form id="search-form">
            <input
              type="text"
              placeholder="Enter city"
              autofocus="on"
              autocomplete="off"
              id="search-text-input"
            />
            <input type="submit" value="search" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
        </div>
        </div>
        </div>
       
     );
} else {
  const apiKey= "445905dadb3d2b0c6f1b916c9d0e3860";
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading...";
}
}
  

import React, { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function CurrentForecast(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature:response.data.main.temp,
      wind:12,
      humidity:response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: `https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png`,
      city: response.data.name
    });
    
    setReady(true);
  }

  if(ready) {return (
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
        </div>
        <div class="col-4">
          
        </div>
      </div>
      </div>
      <div className="row" id="current-forecast">
        <div className="col-md-6">
          <h1>{weatherData.city}</h1>
          
            <p>Day and time</p>
            
          <h2>
            <img
            src={weatherData.iconUrl}
            alt={weatherData.description}
            className="float-left"
            />
            <span id="temp"> {Math.round(weatherData.temperature)}°C</span>
          </h2>
          <p className="text-capitalize" >{weatherData.description}</p> 
        </div>
        <div className="col-md-6">
        
          <p id="humidity">Humidity {weatherData.humidity}%</p>
          <p id="wind">Wind {weatherData.wind}km/h</p>
        </div>
      </div>
  </div>
     );
}else {
  const apiKey= "445905dadb3d2b0c6f1b916c9d0e3860";
  let city = "Wellington";
  let apiUrl=`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "loading...";
}
}
  
  

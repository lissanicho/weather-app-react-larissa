import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecast.css";
import axios from "axios";


export default function WeeklyForecast(props) {

  function handleResponse(response) {
  console.log(response.data);
} 
console.log(props);

let apiKey= "445905dadb3d2b0c6f1b916c9d0e3860";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

axios.get(apiUrl).then(handleResponse);
 
  return (
    <div className="WeeklyForecast">
      <div class="row" id="weekly-forecast">
        <div class="col-2">
          <div className="forecast-day">Day 1</div>
            <WeatherIcon code="04d" size={36}/>
         <div className="forecast-temperatures">
          <span forecast-maximum>19°C</span> 
          <span className="forecast-minimum">10°C</span></div> 
        </div>
      </div>
    </div>
  );
}
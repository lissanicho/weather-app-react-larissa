import React, {useState} from "react";
import "./WeeklyForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";


export default function WeeklyForecast(props) {
let [loaded, setLoaded]= useState(false);
let [forecast, setForecast]= useState(null);
  function handleResponse(response) {
  setForecast(response.data.daily);
  setLoaded(true);
} 

if (loaded){
  console.log(forecast);
  return (
<div className="WeeklyForecast">
      <div class="row" id="weekly-forecast">
       {forecast.map(function (dailyforecast, index){
       if (index <6) 
        return (
          
          <div class="col-2" key={index}>
          <WeatherForecastDay data={dailyforecast} />
          </div>
        )
       })}
        
        
      </div>
    </div>
  );
}
else{
let apiKey= "445905dadb3d2b0c6f1b916c9d0e3860";
let longitude = props.coordinates.lon;
let latitude = props.coordinates.lat;
let apiUrl= `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);

return null;
}}
import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeeklyForecast.css";

export default function WeeklyForecast() {
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
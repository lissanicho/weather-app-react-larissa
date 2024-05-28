import React from "react";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    <div class="col-4">
        
      <div className="row" id="current-forecast">
        <div className="col-md-6">
          <h1>{props.data.city}</h1>
          
            <p><FormatDate date={props.data.date} /></p>
            
          <h2>
            <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
            />
            <span id="temp"> {Math.round(props.data.temperature)}°C</span>
          </h2>
          <p className="text-capitalize" >{props.data.description}</p> 
        </div>
        <div className="col-md-6">
        
          <p id="humidity">Humidity {props.data.humidity}%</p>
          <p id="wind">Wind {props.data.wind}km/h</p>
        </div>
      </div>
      </div>
      </div>
      );
      }

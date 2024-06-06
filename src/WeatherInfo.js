import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    
        
      <div className="row" id="current-forecast">
        <div className="col-md-6">
          <h1 className="cityName">{props.data.city}</h1>
          
            <p className="current-time"><FormatDate date={props.data.date} /></p>
            
          <h2><div>
            <WeatherIcon  code={props.data.icon} size={52}/>
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
            
          </h2>
 
        </div>
        <div className="col-md-6">
          <p id="description" >{props.data.description}</p>
          <p id="humidity">Humidity {props.data.humidity}%</p>
          <p id="wind">Wind {Math.round(props.data.wind)}km/h</p>
        </div>
      </div>
      </div>
      
      );
      }

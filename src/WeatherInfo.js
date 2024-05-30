import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import 'bootstrap/dist/css/bootstrap.css';


export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
    
        
      <div className="row" id="current-forecast">
        <div className="col-md-6">
          <h1>{props.data.city}</h1>
          
            <p><FormatDate date={props.data.date} /></p>
            
          <h2><div>
            <WeatherIcon  code={props.data.icon} size={52}/>
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
            
          </h2>
          <p className="text-capitalize" >{props.data.description}</p> 
        </div>
        <div className="col-md-6">
        
          <p id="humidity">Humidity {props.data.humidity}%</p>
          <p id="wind">Wind {Math.round(props.data.wind)}km/h</p>
        </div>
      </div>
      </div>
      
      );
      }

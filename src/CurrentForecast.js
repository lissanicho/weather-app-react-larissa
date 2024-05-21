import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";

export default function CurrentForecast(props) {
  return (
    <div className="container">
      
      <div className="row" id="current-forecast">
        <div className="col-md-6">
          <h1>City</h1>
          <p id="date">Day and time</p>
          <h2>
            <span id="temp"> current temp </span>
          </h2>
          <p id="cloud-condition">cloud condition</p>
        </div>
        <div className="col-md-6">
          <img src="" alt="cloudy" id="icon" />
          <p id="humidity">humidity</p>
          <p id="wind">wind</p>
        </div>
      </div>
    </div>
    
  );
}

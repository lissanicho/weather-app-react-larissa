import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");

  function displayTemperature(response) {
    let displayTemp = document.querySelector("h3");
    displayTemp.innerHTML = `The temperature in ${city} is ${Math.round(
      response.data.main.temp
    )} °C<br />
        The humidity is ${Math.round(response.data.main.humidity)} %<br />
        The wind speed is ${Math.round(response.data.wind.speed)} km/h<br/>

      
    `;
  }

  function handleSubmit(event, response) {
    event.preventDefault();
    setTemperature(response);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=17ad6e67aa629189f73b053634668b20&units=metric`;
    axios.get(url).then(displayTemperature);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input type="search" onChange={updateCity} />
        <input type="submit" value="Search" />
      </form>
      <h3></h3>
    </div>
  );
}

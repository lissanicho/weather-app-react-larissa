import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01D": "CLEAR_DAY",
    "01N": "CLEAR_NIGHT",
    "02D": "PARTLY_CLOUDY_DAY",
    "02N": "PARTLY_CLOUDY_NIGHT",
    "03D": "PARTLY_CLOUDY_DAY",
    "03N": "PARTLY_CLOUDY_NIGHT",
    "04D": "CLOUDY",
    "04N": "CLOUDY",
    "09D": "RAIN",
    "09N": "RAIN",
    "10D": "RAIN",
    "10N": "RAIN",
    "11D": "RAIN",
    "11N": "RAIN",
    "13D": "SNOW",
    "13N": "SNOW",
    "50D": "FOG",
    "50N": "FOG",
  };  
    
    
    return (
<ReactAnimatedWeather
icon={codeMapping[props.code]}
color="yellow"

animate={true}
/>
);
}
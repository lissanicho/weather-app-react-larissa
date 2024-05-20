import React from "react";
import "./styles.css";
import Searchbar from "./Searchbar";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import Footer from "./Footer";


export default function App() {
  return (
    <div className="App">
      <Searchbar />
      <CurrentForecast />
      <WeeklyForecast />
      <Footer />
    </div>
  );

}



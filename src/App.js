import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import CurrentForecast from "./CurrentForecast";
import WeeklyForecast from "./WeeklyForecast";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";



export default function App() {
  return (
    <div className="App">
      <SearchEngine />
      <CurrentForecast />
      <WeeklyForecast />
      <Footer />
    </div>
  );

}



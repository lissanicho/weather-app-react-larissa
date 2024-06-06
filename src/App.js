import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css";
import CurrentForecast from "./CurrentForecast";
import Footer from "./Footer";




export default function App() {
  return (
    <div className="App">
      <div >
    
      <CurrentForecast defaultCity="Wellington" />
      
      <Footer />
    </div>
    </div>
  );

}



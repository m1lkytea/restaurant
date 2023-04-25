import React from "react";
import "../styling/Home.css";
import data from "../files/hours.json"
import Hours from "./hours"

const Home = () => {

  function storeHours() {
   return data.map((day) => 
    <Hours day = {day.day}
    open = {day.openingHour}
    close = {day.closingHour}/>
  )}
  return (
    <div className="home">
      <div className="tittle-hours">
      <h1>Delicious bites</h1>
      <h2>a taste of perfection</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
        lacus sit amet nisi rhoncus bibendum.
      </p>

      <div>{storeHours()}</div>
      </div>

      <div className="rest-picture">

      </div>
     
    </div>
  );
};

export default Home;
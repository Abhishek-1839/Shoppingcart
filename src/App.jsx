import React from 'react'
import "./App.css";
// import Restaurant from './Components/Restaurant';
// import INITIAL_RESTAURANT_DATA from "./DATA/restaurant.json"
import Shop from './Components/Shop';
import Navbar from './Components/Navbar';
// import Counter from './Components/Counter'
function App() {
  // const restaurantData = INITIAL_RESTAURANT_DATA;
  // console.log(restaurantData);


  return (
    <div className="App">
      <Navbar />
      <Shop/>
      {/* <Restaurant restaurantData={restaurantData} /> */}
      {/* <Counter /> */}
    </div>
  )
}

export default App

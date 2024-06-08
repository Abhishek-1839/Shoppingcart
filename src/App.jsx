import React from 'react'
import "./App.css";
import Restaurant from './Components/Restaurant';
import INITIAL_RESTAURANT_DATA from "./DATA/restaurant.json"
// import Counter from './Components/Counter'
function App() {
  const restaurantData = INITIAL_RESTAURANT_DATA;
  console.log(restaurantData);


  return (
    <div className="App">
      <Restaurant restaurantData={restaurantData} />
      {/* <Counter /> */}
    </div>
  )
}

export default App

import React from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Items from "./Components/Items/Items";
import Hero from "./Components/Hero";
import Checkout from "./Components/Checkout";

function App() {
  return (
    <div className="App">
		<Checkout/>
		<Header/>
		<Hero/>
		<Items/>
    </div>
  );
}

export default App;

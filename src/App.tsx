import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Items from "./Components/Items/Items";

function App() {
  return (
    <div className="App">
		<Header/>
		<SearchBar/>
		<Items/>
    </div>
  );
}

export default App;

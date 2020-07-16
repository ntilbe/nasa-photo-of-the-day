import React, { useState, useEffect } from "react";
import axios from 'axios'; 
import { API_KEY, BASE_URL } from './constants'

import "./App.css";
import HeaderContainer from './components/Header/HeaderContainer'
import DetailsContainer from './components/Details/DetailsContainer'


export default function App() {
  const [dailyDetails, setDetails] = useState([])

  // call to API on first DOM render
    useEffect(() => {
      // https://api.nasa.gov/planetary/apod?api_key=H4oCgV4UI6ahGme1awm9XtGy6r7cV1iDPJZm8J8L
      axios.get(`${BASE_URL}apod?api_key=${API_KEY}`)
        .then(result => {
          setDetails(result.data)
        })
        .catch(error => {
          debugger
      })
    }, [])
  

  return (
    <div className="App">
      <HeaderContainer />
      <DetailsContainer info={dailyDetails}/>
    </div>
  );
}
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import React from 'react'
import {Routes, Route} from 'react-router-dom'


import MyFlights from './routes/MyFlights';
import Home from './routes/Home'
import Explore from './routes/Explore'

function App() {
  return (  
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/my-flights' element={<MyFlights />} />
    <Route path='/explore' element={<Explore />} />
  </Routes>
  )
}

export default App;
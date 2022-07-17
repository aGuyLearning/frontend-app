import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './MyFlights.scss';

import FlightCard from '../components/FlightCard';
import Profile from '../components/Profile';

import NavigationBar from '../components/NavigationBar';

function MyFlights() {
  return (<div>
    <NavigationBar/>
    <div className='my-flights'>
      <Profile progress={70} username="John Green" email="j.green@gmail.com" membership="06/22/2022"/>
      <hr/>
      <h2>Upcoming Flights</h2>
      <FlightCard status="delayed by 10 minutes" airline="Lufthansa" passengerName = "John Green" date = "25JUN" category= "Economy" from = "London" to = "New York" time = "10:10" boardingTime = "10:00" seat = "39F" gate="11B" flightNumber ="A 136" />
      <FlightCard airline = "Air Berlin" passengerName = "John Green" date = "25JUN" category= "Business" from = "London" to = "New York" time = "10:10" boardingTime = "10:00" seat = "39F" gate="11B" flightNumber ="A 136" />
      <FlightCard airline = "Lufthansa" passengerName = "John Green" date = "25JUN" category= "Economy" from = "London" to = "New York" time = "10:10" boardingTime = "10:00" seat = "39F" gate="11B" flightNumber ="A 136" />
    </div>
  </div>)
}

export default MyFlights;
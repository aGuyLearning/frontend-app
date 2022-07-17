import React from 'react'
import AirplaneCard from '../components/AirplaneCard'
import ExploreCard from '../components/ExploreCard'
import NavigationBar from '../components/NavigationBar'
import Search from '../components/Search'

import './HomeStyles.css'

const Home = () => {
    return (
        <div>
        <NavigationBar />
        <div className='main-wrapper'>
            <Search/>
            <AirplaneCard />
            <ExploreCard />
        </div>
        </div>
    )
}

export default Home

import React from "react"
import { Card} from "react-bootstrap"
import Aircraft from '../assets/aircraft.jpeg'

import './AirplaneCardStyles.scss'

const AirplaneCard = (props) => {
    return (
        <Card className="hero">
            <Card.Img src={Aircraft}/>
            <Card.Footer className="text-center">
                <h1>alis</h1>
                <br />
                <p>THE WORLD AWAITS.</p>
            </Card.Footer>
        </Card>
    )
}
export default AirplaneCard
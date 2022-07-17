import React from "react"
import { Nav, Card, Button, Col, Row } from "react-bootstrap"

import './ExploreCardStyles.scss'
import travel from '../assets/travel.jpeg'
import window from '../assets/window.jpeg'
import overview from '../assets/overview.jpeg'

const ExploreCard = (props) => {
    return (
        <Row>
        <Col>
        <Card className="explore-card" style={{ width: '18.5rem' }}>
        <Card.Img variant="top" src={window} height='200rem' />
        <Card.Body>
          <Card.Title>Comfortable Air Travel.</Card.Title>
          <Card.Text className="explore-text">
            Our offers make you discover a whole new flight experience.
          </Card.Text>
          <Nav.Link href="/"><Button className="explore-btn" variant="primary">Book</Button></Nav.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
        <Card className="explore-card" style={{ width: '18.5rem'}}>
        <Card.Img variant="top" src={travel} height="200rem" />
        <Card.Body>
          <Card.Title>Takes You Anywhere.</Card.Title>
          <Card.Text className="explore-text">
            Find the place of your dreams. The trip of your life is only one click way.
          </Card.Text>
          <Nav.Link href="/explore"><Button className="explore-btn" variant="primary">Explore</Button></Nav.Link>
        </Card.Body>
      </Card>
      </Col>
      <Col>
        <Card className="explore-card" style={{ width: '18.5rem' }}>
        <Card.Img variant="top" src={overview} height="200rem"/>
        <Card.Body>
          <Card.Title>Keep Track of Your Flights.</Card.Title>
          <Card.Text className="explore-text">
                Check your bookings and plan new adventures.
          </Card.Text>
          <Nav.Link href="/my-flights"><Button className="explore-btn" variant="primary">Profile</Button></Nav.Link>
        </Card.Body>
      </Card>
      </Col>
      </Row>
    )
}
export default ExploreCard
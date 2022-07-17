import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FlightCardStyle.scss';

import { OverlayTrigger, Card, Tooltip } from 'react-bootstrap';
import {AiFillWarning} from "@react-icons/all-files/ai/AiFillWarning";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'

import logoLH from '../assets/lufthansa.png';
import logoAB from '../assets/airberlin.png';

function FlightCard(props) {

    let borderColor = 'primary';
    let logo = null;

    switch (props.airline) {
        case "Lufthansa":
            borderColor = 'warning';
            logo = logoLH;
            break;
        case "Air Berlin":
            borderColor = 'danger';
            logo = logoAB;
            break;
        default:
            break;
    }

    if (props.status == null) {
        return (
            <Card border={borderColor}>
              <Card.Header>
                <Row>
                  <Col>
                    <img src={logo} width="50" />
                    <div className='Airline'>{props.airline}</div>
                  </Col>
                  <Col className='title'>
                    <div>Boarding Card</div>
                    <div className='italic-title'>{props.category}</div>
                  </Col>
                </Row>
              </Card.Header>
              <Card.Body>
              <Container fluid>
                <Row className='row'>
                  <Col>
                    <Row className='small-row' >Passenger Name</Row>
                    <Row className='small-row-bold'>{props.passengerName}</Row>
                  </Col>
                  <Col>
                    <Row className='small-row' >Date</Row>
                    <Row className='small-row-bold'>{props.date}</Row>
                  </Col>
                  <Col>
                    <Row className='small-row' >Time</Row>
                    <Row className='small-row-bold'>{props.time}</Row>
                  </Col>
                </Row>
                <Row className='row'>
                  <Col>
                    <Row className='small-row' >From</Row>
                    <Row className='small-row-bold'>{props.from}</Row>
                  </Col>
                  <Col>
                    <Row className='small-row' >Flight</Row>
                    <Row className='small-row-bold'>{props.flightNumber}</Row>
                  </Col>
                  <Col>
                    <Row className='small-row' >Seat</Row>
                    <Row className='small-row-bold'>{props.seat}</Row>
                  </Col>
                </Row>
                <Row className='row'>
                  <Col>
                    <Row className='small-row' >To</Row>
                    <Row className='small-row-bold'>{props.to}</Row>
                  </Col>
                  <Col>
                    <Row className='small-row' >Gate</Row>
                    <Row className='small-row-bold'>{props.gate}</Row>
                  </Col>
                  <Col>
                    <Row className='small-row'>Board till</Row>
                    <Row className='small-row-bold'>{props.boardingTime}</Row>
                  </Col>
                </Row>
              </Container>
              </Card.Body>
            </Card>
          );
    }

  return (
    <Card border={borderColor}>
      <Card.Header>
        <Row>
          <Col>
            <img src={logo} width="50" />
            <div className='Airline'>{props.airline}</div>
          </Col>
          <Col className='title'>
            <div>Boarding Card</div>
            <div className='italic-title'>{props.category}</div>
          </Col>
        </Row>
      </Card.Header>

      <Card.Body>
      <Container fluid>
        <Row className='row'>
          <Col>
            <Row className='small-row' >Passenger Name</Row>
            <Row className='small-row-bold'>{props.passengerName}</Row>
          </Col>
          <Col>
            <Row className='small-row' >Date</Row>
            <Row className='small-row-bold'>{props.date}</Row>
          </Col>
          <Col>
            <Row className='small-row' >Time</Row>
            <Row className='small-row-bold'>{props.time}</Row>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <Row className='small-row' >From</Row>
            <Row className='small-row-bold'>{props.from}</Row>
          </Col>
          <Col>
            <Row className='small-row' >Flight</Row>
            <Row className='small-row-bold'>{props.flightNumber}</Row>
          </Col>
          <Col>
            <Row className='small-row' >Seat</Row>
            <Row className='small-row-bold'>{props.seat}</Row>
          </Col>
        </Row>
        <Row className='row'>
          <Col>
            <Row className='small-row' >To</Row>
            <Row className='small-row-bold'>{props.to}</Row>
          </Col>
          <Col>
            <Row className='small-row' >Gate</Row>
            <Row className='small-row-bold'>{props.gate}</Row>
          </Col>
          <Col>
            <Row className='small-row'>Board till</Row>
            <Row className='small-row-bold'>
            <OverlayTrigger placement='left' overlay={<Tooltip>{props.status}</Tooltip>}>
            <span className='warning'>
                 <AiFillWarning />
                    {props.boardingTime}
                </span>
                </OverlayTrigger>
            </Row>
          </Col>
        </Row>
      </Container>
      </Card.Body>
    </Card>
  );
}

export default FlightCard;

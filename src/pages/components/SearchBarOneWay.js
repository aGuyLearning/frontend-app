import React from "react";
import Form from "react-bootstrap/Form";
import {Row, Col, Button} from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';

import './SearchBarStyles.scss'

export default function SearchBarOneWay() {
  return (
    <form>
        <Row>
        <Col>
        <FloatingLabel label="From">
            <Form.Control type="text" className="text-input" placeholder="From" list="data"/>
            </FloatingLabel>
            <datalist id="data">
                <option value="San Francisco"/>
            </datalist>
        </Col>
        <Col>
        <FloatingLabel label="To">
            <Form.Control type="text" className="text-input" placeholder="To" list="data"/>
            </FloatingLabel>
        </Col>
        </Row>
        <Row>
        <Col>
             <FloatingLabel label="Departure">
            <Form.Control size="sm" className="datepicker" type="date"></Form.Control>
            </FloatingLabel>
        </Col>
        </Row>
        <Row className="justify-content-center">
            <Button className="submit-btn" type="submit">Search</Button>
        </Row>
    </form>
  );
}
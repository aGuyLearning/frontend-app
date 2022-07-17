import React from "react";
import Form from "react-bootstrap/Form";
import {Row, Col, Button} from "react-bootstrap"
import FloatingLabel from 'react-bootstrap/FloatingLabel';
 

import {MdTravelExplore} from "@react-icons/all-files/md/MdCardTravel"
import './SearchBarStyles.scss'

export default function SearchBar() {
  return (
    <form>
        <Row>
        <Col>
        <FloatingLabel label="From">
            <Form.Control type="text" className="text-input" placeholder="From" list="data"/>
            </FloatingLabel>
            <datalist id="data">
                <option value="San Francisco"/>
                <option value="New York" />
                <option value="Munich" />
                <option value="London" />
                <option value="Hong Kong" />
                <option value="Los Angeles" />
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
        <Col>
             <FloatingLabel label="Returning">
            <Form.Control size="sm" type="date"></Form.Control>
            </FloatingLabel>
        </Col>
        </Row>
        <Row className="justify-content-center">
            <Button className="submit-btn" type="submit"><MdTravelExplore className="icon"/>Search</Button>
        </Row>
    </form>
  );
}
import React from 'react';
import './ProfileStyle.scss';
import {CircleProgress} from 'react-gradient-progress'


import { Card, Col, Row, Container } from 'react-bootstrap';

function Profile(props) {
  return (
    <Card className='profile-card'>
        <Container fluid>
            <Row><h2>Profile</h2></Row>
            <Row>
                <Col>
                    <Col></Col>
                    <div>
                        <span className='category'>Username: </span>
                        <span className='entry'>{props.username}</span>
                    </div>
                    <div>
                        <span className='category'>Email: </span>
                        <span className='entry'>{props.email}</span>
                    </div>
                    <div>
                        <span className='category'>Member since </span>
                        <span className='entry'>{props.membership}</span>
                    </div>
                </Col>
                <Col>
                    <CircleProgress width = {80} fontColor="#000000" fontSize={15} percentage={props.progress} strokeWidth={6} primaryColor={['#E78E22', '#EEB774']} />
                    Collect miles and get <span className='reward'>10% off on all flights </span>
                </Col>
             </Row>
        </Container>
    </Card>
  );
}

export default Profile;

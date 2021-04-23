import { Route, HashRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import videos from "./videos.js";
import './App.css';

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {ListGroup, ListGroupItem}  from 'react-bootstrap';
import {Dropdown, DropdownButton}  from 'react-bootstrap';


const App = () => {
  return (
    <div className="App" data-test="component-app">
      <Container>
        <Row>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
          <Col>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
          </Col>
        </Row>
      </Container>


    <Container>
      <Row>
        {
          videos.map((video,index) =>
          <Col>
            <Card key={index} style={{ width: '18rem' }}>
              <Card.Img variant="top" src={video.thumbnail} />
              <Card.Body>
                <Card.Title>{video.name}</Card.Title>
                <Card.Text>
                  {video.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Category: {video.category}</ListGroupItem>
                <ListGroupItem>Duration: {video.duration}</ListGroupItem>
                <ListGroupItem>Date Created: {video.dateCreated}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                {
                  video.tags.map((tag,index)=>
                    <Card.Link key={index} href="#">{tag}</Card.Link>
                  )
                }
              </Card.Body>
            </Card>
          </Col>
          )
        }
      </Row>
    </Container>
      <Router>
        <Link to="/user/kyle">Home</Link>
        <Route path="/user/:username"  />
      </Router>
    </div>
  );
}

export default App;

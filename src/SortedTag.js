import { Route, HashRouter as Router, Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import videos from "./videos.js";
import './sorted.css';


import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {ListGroup, ListGroupItem}  from 'react-bootstrap';
import {Dropdown, DropdownButton}  from 'react-bootstrap';


const SortedTag = () => {

  let {tag} = useParams();

  const categories = () => {

    const array = [];
    for(let i = 0; i < videos.length; i++){
      const innerArray = videos[i].category.split("->");
      const bindArray = [];
      for( let i = 0; i < innerArray.length; i++ ){
        bindArray.push(innerArray[i]);
      }
      array.push(bindArray);
    }

    const nextArr = [];
    for( let i = 0; i < buttons(array); i++ ){
      nextArr.push([]);
      for( let j = 0; j < array.length; j++ ){
        nextArr[i].push(array[j][i]);
      }
    }

    const uniqueArr = [];
    for( let i = 0; i < nextArr.length; i++ ){
      const unique = nextArr[i].filter(onlyUnique);
      uniqueArr.push(unique);
    }

    console.log(uniqueArr);
    return uniqueArr;
  }

  const buttons = (array) => {
    let max = 0;
    for( let i = 0; i < array.length; i++ ){
      if(array[i].length > max){
        max = array[i].length
      }
    }
    // console.log(max);
    return max;
  }

  const buttonArr = (max) => {
    const buttonArr=[];
    for( let i = 0; i < max; i++ ){
      buttonArr.push(i)
    }
    // console.log(buttonArr);
    return buttonArr;
  }

  function onlyUnique(value, index, self) {
   return self.indexOf(value) === index;
  }

  const sort = (tag) => {
    const sorted = []
    for( let i = 0; i < videos.length; i++ ){
      // const innerArray = videos[i].category.split("->");
      const innerArray = videos[i].tags;
      console.log(innerArray,tag);
      for( let j = 0; j < innerArray.length; j++ ){
        if(tag.toLowerCase() === innerArray[j].toLowerCase()){
          sorted.push(videos[i]);
        }
      }
    }
    console.log(sorted);
    return sorted;
  }

  const formatDate = (date) => {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  const msToTime = (duration) => {
    let milliseconds = Math.floor((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds;
  }

  return (
    <div className="App" data-test="component-app">
      <Container className="categories">
        <Row>
          {
            categories().map((category,index)=>
              <Col key={index+"a"}>
                <DropdownButton id="dropdown-basic-button" title={"Category " + (index + 1)}>
                  {
                    category.map((cat,idx)=>
                      <Dropdown.Item key={idx+"b"} href={"#/category/" + (index + 1) + "/" + cat} >{cat}</Dropdown.Item>
                    )
                  }
                  <Dropdown.Item href={"#/"} >All Categories</Dropdown.Item>
                </DropdownButton>
              </Col>
            )
          }
        </Row>
      </Container>


      <Container>
      <Row>
        {
          sort(tag).map((video,index) =>
          <Col>
            <Card key={index+"c"} style={{ width: '18rem' }} className="cards">
              <Card.Img variant="top" src={video.thumbnail} className="images"/>
              <Card.Body>
                <Card.Title>{video.name}</Card.Title>
                <Card.Text>
                  {video.description}
                </Card.Text>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroupItem><strong>Category:</strong> {video.category}</ListGroupItem>
                <ListGroupItem><strong>Duration:</strong> {msToTime(video.duration)}</ListGroupItem>
                <ListGroupItem><strong>Date Created:</strong> {formatDate(video.dateCreated)}</ListGroupItem>
              </ListGroup>
              <Card.Body>
                {
                  video.tags.map((tag,index)=>
                    <Card.Link key={index} href={`#/tag/${tag}`}>{tag}</Card.Link>
                  )
                }
              </Card.Body>
            </Card>
          </Col>
          )
        }
      </Row>
      </Container>
    </div>
  );
}

export default SortedTag;

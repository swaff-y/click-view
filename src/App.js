import { Route, HashRouter as Router, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from 'react';
import videos from "./videos.js";
import './App.css';
import Sorted from './Sorted.js'
import SortedTag from './SortedTag.js'
import Unsorted from './Sorted.js'

import {Container, Row, Col} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import {ListGroup, ListGroupItem}  from 'react-bootstrap';
import {Dropdown, DropdownButton}  from 'react-bootstrap';


const App = () => {


  return (
    <div className="App" data-test="component-app">
    <Router>
        <Route path="/" exact component={Unsorted} />
        <Route path="/category/:category/:subcategory" component={Sorted} />
        <Route path="/tag/:tag" component={SortedTag} />
      </Router>
    </div>
  );
}

export default App;

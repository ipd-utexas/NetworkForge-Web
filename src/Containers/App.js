import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import EditContainer from './EditContainer';
import { Router, Route, hashHistory } from 'react-router'

import OldIndex from './HomePage';

class App extends Component {
  render() {


    const createElement = (Component, props) => {
      return <Component
          actions={this.props.actions}
          {...props} />
    }

    return (
        <Router history={hashHistory}  createElement={createElement}>
          
          <Route path="/" component={OldIndex}/>
          <Route path="/edit" component={EditContainer}/>
        </Router>

    );
  }
}

export default App;

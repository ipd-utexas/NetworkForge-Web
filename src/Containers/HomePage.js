/**
 * Created by old on 1/11/17.
 */
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import HomePageGrid from './homepagegrid';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router'






class OldIndex extends Component {


  constructor(props) {
    super(props);

    this.state = {
      searchVisible: false
    }
  }
  render() {


    return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <h2 className="headerTitle">Welcome to NetworkForge</h2>
          </div>
          <p className="App-intro">
            Instructions go here. 

            <div className="footer"><Link to={'/edit'}>EDIT</Link></div>
          </p>



          <HomePageGrid indexName={this.props.indexName} ShallowCS={this.props.ShallowCS} actions={this.props.actions} PublisherName={this.props.PublisherName} Ents={this.props.Ents}  CurrentEntUIN={this.props.CurrentEntUIN}/>

          
        </div>
    );


  }
}


const mapStateToProps = (state) => {
  return {
    indexName: state.indexName,
    PublisherName: state.indexPublisher,
    CurrentEntUIN: state.currentEntUIN,
    Ents: state.ents,
    ShallowCS:state.shallowCS 
    
  }
}


export default connect(
    mapStateToProps
)(OldIndex);
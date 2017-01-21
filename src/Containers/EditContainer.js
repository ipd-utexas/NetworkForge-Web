import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router';
import RSL from 'react-scrollable-list';
import * as RB from 'react-bootstrap';



var listItemGenerator = ()=>{
  var temparray =[0,1,2];
  var resultarray =[];
  temparray.forEach(function (x) {
    resultarray.push({id:x, content:<h1>I win</h1>});


  });

  return resultarray;
};





const EditContainer = React.createClass({






  trueListGenerator() {

    if(this.props.IndexName !== 'initial') {
      console.log('i work');
      var listOfEnts = [];
      var currentEvents = 0;
     Object.keys(this.props.Ents).forEach((key)=> {
        currentEvents+=1;
        listOfEnts.push(<RB.Panel key={key} header={this.props.Ents[key].name} eventKey={currentEvents}>just a test</RB.Panel>);

      });
      return listOfEnts;
    }

  },


  render()
    {



      return (
          <div>
            <div className="Edit-header">
              <img src={logo} className="App-logo" alt="logo"/>
              <h1>EDIT</h1>

              <RB.Accordion>{this.trueListGenerator()}</RB.Accordion>
            </div>

          </div>


      );
    }


  });


const mapStateToProps = (state) => {
  return {
    IndexName: state.indexName,
    PublisherName: state.indexPublisher,
    CurrentEntUIN: state.currentEntUIN,
    Ents: state.ents

  }
}



export default connect(mapStateToProps)(EditContainer);
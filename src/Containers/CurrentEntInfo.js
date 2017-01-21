/**
 * Created by old on 1/19/17.
 */

import React, { Component } from 'react';
import * as RB from 'react-bootstrap';

import FormRouter from './FormRouter';

const Generatedeps = function(){
  var ulList = [2,4,5];
  var resultlist = [];
  for(var x in ulList){
    resultlist.push(<li><h1>this</h1></li>);
  }
  return resultlist;


};


class CurrentEntInfo extends React.Component{


  render(){

    if(this.props.CurrentEntUIN != 'initial') {
      var resultlist = [];
      var currentEnt = this.props.Ents[this.props.CurrentEntUIN];
      currentEnt = currentEnt.deps;
      for(var x in currentEnt){
        resultlist.push(<h3 key={x}>{currentEnt[x][0]}</h3>)
      }
    }





    return (
        <div> <h1>{this.props.IndexName}</h1>

          <h2>Publisher:</h2>

          <h2>{this.props.PublisherName}</h2>
          <h2>Dependencies:</h2>
          <div>{resultlist}</div>
</div>

    );
  }


}




export default CurrentEntInfo;
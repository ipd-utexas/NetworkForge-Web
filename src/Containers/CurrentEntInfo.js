/**
 * Created by old on 1/19/17.
 */

import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import DepTags from '../DepTags';

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

    if(this.props.ShallowCS == 2) {
      var resultlist = [];
      
      

      var depwell = <RB.Well> <DepTags Ents={this.props.Ents} CurrentEntUIN={this.props.CurrentEntUIN} /></RB.Well>
    }





    return (
        <div> <h1>{this.props.indexName}</h1>

          <h2>Publisher:</h2>

          <h2>{this.props.PublisherName}</h2>
          <h2>Dependencies:</h2>
          <div>{depwell}</div>


</div>

    );
  }


}




export default CurrentEntInfo;
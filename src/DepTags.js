/**
 * Created by old on 1/22/17.
 */
import React, { Component } from 'react';


import './Containers/App.css';
import 'whatwg-fetch';
import {connect} from 'react-redux';
import * as RB from 'react-bootstrap';
import { WithContext as ReactTags } from 'react-tag-input';


const DepTags = React.createClass({


  getInitialState() {
    var currentEnt = this.props.Ents[this.props.CurrentEntUIN];
    var deparray = currentEnt.deps;
    var resultarray = [];
    for(var x=0; x< deparray.length; ++x){
      resultarray.push({id:x,text:deparray[x][0]});

    }
    



    return {
      tags: this.props.Tags,
      suggestions: ["Banana", "Mango", "Pear", "Apricot"]
    }
  },
  handleDelete(i) {
    console.log(i);
    let shibb = this.props.Ents[this.props.CurrentEntUIN];
    shibb = shibb.deps;
    if (shibb.length > 1){
      shibb.splice(i,1);
    }
    else{
      shibb = [];
    }
    
    console.log('this is shib');
    console.log(shibb);
    this.props.actions.EntityTracker.DelDep(shibb);
  },
  handleAddition(tag) {
    let tags = this.state.tags;
    tags.push({
      id: tags.length + 1,
      text: tag
    });
    this.setState({tags: tags});
  },
  handleDrag(tag, currPos, newPos) {
    let tags = this.state.tags;

    // mutate array
    tags.splice(currPos, 1);
    tags.splice(newPos, 0, tag);

    // re-render
    this.setState({ tags: tags });
  },
  render() {


    let tags = this.props.Tags;


    let suggestions = this.state.suggestions;
    return (
        <div>
          <ReactTags tags={tags}
                     suggestions={suggestions}
                     handleDelete={this.handleDelete}
                     handleAddition={this.handleAddition}
                     handleDrag={this.handleDrag} />
        </div>
    )
  }
});


export default DepTags;
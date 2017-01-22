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
    var finalArray = [];
    var currentEnt = this.props.Ents[this.props.CurrentEntUIN];
    var deparray = currentEnt.deps;
    console.log('this is the current dep');
    console.log(deparray);



    return {
      tags: [{id:0,text:'yaya'}],
      suggestions: ["Banana", "Mango", "Pear", "Apricot"]
    }
  },
  handleDelete(i) {
    let tags = this.state.tags;
    tags.splice(i, 1);
    this.setState({tags: tags});
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
    var currentEnt = this.props.Ents[this.props.CurrentEntUIN];
    var deparray = currentEnt.deps;
    var resultarray = [];
    for(var x=0; x< deparray.length; ++x){
      resultarray.push({id:x,text:deparray[x][0]});

    }
    console.log(resultarray);
    let tags = resultarray;
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
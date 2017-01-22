/**
 * Created by old on 1/11/17.
 */
import React, { Component } from 'react';
import logo from './Containers/logo.svg';
import './Containers/App.css';
import 'whatwg-fetch';
import HomePageGrid from './homepagegrid';
import {connect} from 'react-redux';
import { Router, Route, Link } from 'react-router'
import EditContainer from './Containers/EditContainer';
import DepTags from './DepTags';




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
            Network Forge helps researchers build networks out of data. Start by adding a Top Level Entity.
            When I was done dying, my conscience regained
            So I began my struggle, a nothingness strained
            Out a flash made of time, my new form blasted out
            And it startled me so and I burst out a shout
            At which my legs ran frantic like birds from a nest
            And I ran until drained, leaving no choice but rest
            So I fell asleep softly at the edge of a cave
            But I should have gone in deeper but I'm not so brave
            And like that I was torn out and thrown in the sky
            And I said all my prayers because surely I'll die
            As I crashed down and smashed into earth, into dirt
            How my skin did explode, leaving only my shirt
            But from shirt grew a tree and then tree grew a fruit
            And I became the seed and that seed was a brute
            And I clawed through the ground with my roots and my leaves

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
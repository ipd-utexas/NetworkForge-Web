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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec efficitur odio et nisl placerat pretium. Nam eu nisl id turpis facilisis viverra in tristique mauris. Sed tincidunt vel libero in imperdiet. Sed laoreet suscipit leo in bibendum. Nunc pretium erat eu sapien egestas, vitae vehicula sem mattis. Cras a ante lacinia, egestas mauris eu, ornare velit. Suspendisse et felis convallis, tincidunt risus quis, accumsan orci. Sed id ante elit.

            <div className="footer"><Link to={'/edit'}>EDIT</Link></div>
          </p>



          <HomePageGrid IndexName={this.props.IndexName} actions={this.props.actions} PublisherName={this.props.PublisherName} Ents={this.props.Ents}  CurrentEntUIN={this.props.CurrentEntUIN}/>


        </div>
    );


  }
}


const mapStateToProps = (state) => {
  return {
    IndexName: state.indexName,
    PublisherName: state.indexPublisher,
    CurrentEntUIN: state.currentEntUIN,
    Ents: state.ents
    
  }
}


export default connect(
    mapStateToProps
)(OldIndex);
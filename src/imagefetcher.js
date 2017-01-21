/**
 * Created by old on 1/11/17.
 */
import React from 'react';
import 'whatwg-fetch';

class ImgComp extends React.Component{

  constructor(props){
    super(props);
    this.state = { url: ''}
  }

  getURL();

  render(){
    const apiURL = this.getURL();
  }




}
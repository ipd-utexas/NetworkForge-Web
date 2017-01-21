/**
 * Created by old on 1/11/17.
 */

import React, { Component } from 'react';
import jsonfile from 'jsonfile';

class FileWriter extends React.Component{
  
  
  render(){


    
    var onClick = () => {

      
      var file = './data.json';
      var obj = {name: 'JP'};
      jsonfile.writeFile(file, obj);
    };
    return (<button onclick={fs.write()}> yep</button>);

    
  };
  
}

export default FileWriter;







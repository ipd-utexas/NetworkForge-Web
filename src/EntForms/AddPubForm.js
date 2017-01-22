/**
 * Created by old on 1/14/17.
 */
/**
 * Created by old on 1/11/17.
 */
import React from 'react';

import * as RB from 'react-bootstrap';



const AddPublisher = React.createClass({
  getInitialState() {
    return {
      value: ''

    };
  },

  handleKeyPress(target) {
    if(target.charCode==13){
      this.handleSubmit();
    }

  },

  handleSubmit(){
    this.props.actions.EntityTracker.TrueAddPub(this.state.value);

    this.props.actions.EntityTracker.IncShallowCS();
    
  },


  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  },

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
        <form onKeyPress={this.handleKeyPress} >
          <RB.FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
          >
            <RB.ControlLabel>Who Published {this.props.indexName}?</RB.ControlLabel>
            <RB.FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
                autoFocus
            />
            <RB.FormControl.Feedback />


            <RB.Button onClick={()=>this.handleSubmit()} >submit</RB.Button>
          </RB.FormGroup>

        </form>
    );
  }
});




export default AddPublisher;

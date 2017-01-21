/**
 * Created by old on 1/11/17.
 */
import React from 'react';

import * as RB from 'react-bootstrap';



const AddEntName = React.createClass({
  getInitialState() {
    return {
      value: ''

    };
  },


  handleSubmit(){
    this.props.actions.EntityTracker.AddEnt(this.state.value);
    this.props.actions.EntityTracker.ChangeEntName(this.state.value);
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

  handleKeyPress(target) {
    if(target.charCode==13){
      this.handleSubmit();
    }

  },

  render() {
    return (

        <form onKeyPress={this.handleKeyPress} >
          <RB.FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
          >
            <RB.ControlLabel>What is the name of your top level index?</RB.ControlLabel>
            <RB.FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}

            />

            <RB.Button onClick={()=>this.handleSubmit()} >submit</RB.Button>
            <RB.FormControl.Feedback />



          </RB.FormGroup>

        </form>
    );
  }
});




export default AddEntName;

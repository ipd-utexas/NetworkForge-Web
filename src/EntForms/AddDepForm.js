
import React from 'react';

import * as RB from 'react-bootstrap';



const AddDependency = React.createClass({
  getInitialState() {
    return {
      value: ''

    };
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

  handleSubmit(){

    console.log('how often?');
    this.props.actions.EntityTracker.AddDep(this.state.value);

    

  },

  handleCloseRound(){

    var submitPayload = this.props.Ents[this.props.CurrentEntUIN];
    submitPayload = submitPayload.deps;
    console.log(submitPayload);



    console.log('this is what is being passed to the middleware');
    console.log(submitPayload);

    this.props.actions.EntityTracker.testACT(submitPayload);





  },


  render() {
    return (
        <form>
          <RB.FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
          >
            <RB.ControlLabel>Does this entity have any dependencies?</RB.ControlLabel>
            <RB.FormControl
                type="text"
                value={this.state.value}
                placeholder="Enter text"
                onChange={this.handleChange}
            />
            <RB.FormControl.Feedback />


            <RB.Button onClick={()=>this.handleSubmit()} >submit</RB.Button>

          </RB.FormGroup>
          <RB.Button onClick={() => this.handleCloseRound()}> close</RB.Button>
        </form>

    );
  }
});




export default AddDependency;

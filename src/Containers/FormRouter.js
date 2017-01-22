/**
 * Created by old on 1/15/17.
 */
/**
 * Created by old on 1/11/17.
 */
import React from 'react';
import  AddEntName from '../EntForms/InitialForm';
import {connect} from 'react-redux';
import AddPublisher from '../EntForms/AddPubForm';
import AddDependency from '../EntForms/AddDepForm';


import * as RB from 'react-bootstrap';



const FormRouter = React.createClass({
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

  handleNameExisting(){
    this.props.actions.EntityTracker.IncShallowCS();
  },
  
  formRoute(shallowCS){


    switch (shallowCS){
      case 0:
        return <AddEntName actions={this.props.actions} />;
      case 1:
       return <AddPublisher actions={this.props.actions}  indexName={this.props.indexName} />;
      case 2:
        return <AddDependency actions={this.props.actions} Ents={this.props.Ents} CurrentEntUIN={this.props.CurrentEntUIN}/>;
      default:
        return <div>yup</div>;

        
    }


    },

  

  handleChange(e) {
    this.setState({ value: e.target.value });
  },

  render() {
    return (
      <div>{this.formRoute(this.props.shallowCS)}</div>
    );
  }
});


const mapStateToProps = (state) =>{
  return {
    shallowCS: state.shallowCS
  }
}




export default connect(mapStateToProps)(FormRouter);


import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import  AddEntName from './EntForms/InitialForm';
import InitialFormPublisher from './EntForms/AddPubForm';
import FormRouter from './Containers/FormRouter';
import CurrentEntInfo from './Containers/CurrentEntInfo';



class HomePageGrid extends React.Component{




  render(){



    return (
        <RB.Grid className='MotherGrid'>
          <RB.Row className="show-grid">
            <RB.Col xs={12} md={8}>
              


             <FormRouter actions={this.props.actions} Ents={this.props.Ents} CurrentEntUIN={this.props.CurrentEntUIN} />
            
            
            
            
            
            
            
            </RB.Col>
            <RB.Col xs={6} md={4}>
              <CurrentEntInfo IndexName={this.props.IndexName} PublisherName={this.props.PublisherName} Ents={this.props.Ents} CurrentEntUIN={this.props.CurrentEntUIN} />


            </RB.Col>

          </RB.Row>



          </RB.Grid>

          );
  }


}




export default HomePageGrid;
import React from 'react';
import {Container, Row, Col } from 'reactstrap';
import { FullFormSubmit } from '../Actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Plot from 'react-plotly.js';

class FullInputs extends React.Component {
  state = {
    form: {
      zipcode: '',
      property_type: '',
      room_type: '',
      accommodates: 0,
      bathrooms: 0,
      bedrooms: 0,
      beds: 0,
      bed_type: '',
    },
    payload: null,
  }

  updateHandler = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      },
      payload: {
        ...this.state.payload,
      }
    });
  };


  FullFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitting:');

    this.props.FullFormSubmit(this.state.form)
  }

  convertListOfIntToListString = (x) => {
    console.log(x);
    const y = x.map(function(item) {
      return `${x}`;
    });
    console.log(y);
  }
  render() {
    return (
      <Container >

      <Row>
      <Col xs="6">
      <Form onSubmit={this.FullFormSubmit} >
          <FormGroup>
            <Label for="Zip">Zip Code</Label>
            <Input value={this.state.zipcode} type="number" name="zipcode" id="exampleZip" placeholder="Zip Code" onChange={this.updateHandler} />
          </FormGroup>
        <FormGroup>
          <Label for="property_type">Property Type</Label>
          <Input value={this.state.property_type} type="select" name="property_type" id="property_type" onChange={this.updateHandler}>
            <option value='Apartment' >Apartment</option>
            <option value='House' >House</option>
            <option value='Condominium' >Condominium</option>
            <option value='Guesthouse' >Guest House</option>
            <option value='Other' >Other</option>
            <option value='Guest suite' >Guest Suite</option>
            <option value='Townhouse' >Townhouse</option>
            <option value='Bungalow' >Bungalow</option>
            <option value='Loft' >Loft</option>
            <option value='Villa' >Villa</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="room_type">Room Type</Label>
          <Input value={this.state.room_type} type="select" name="room_type" id="room_type" onChange={this.updateHandler}>
          <option value='Entire home/apt' >Entire Property</option>
            <option value='Private room' >Private Room</option>
            <option value='Shared room' >Shared Room</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label value={this.state.accommodates} for="Accommodates">Accommodates How Many Guests?</Label>
          <Input value={this.state.accommodates} type="number" name="accommodates" id="accommodates" placeholder="Accommodates How Many Guests?" onChange={this.updateHandler} />
          </FormGroup>
          <FormGroup>
          <Label for="Bathrooms">Number of Bathrooms</Label>
          <Input value={this.state.bathrooms} type="number" name="bathrooms" id="examplebathrooms" placeholder="Number of Bathrooms" onChange={this.updateHandler} />
          </FormGroup>
          <FormGroup>
          <Label for="Bedrooms">Number of Bedrooms</Label>
          <Input value={this.state.bedrooms} type="number" name="bedrooms" id="examplebedrooms" placeholder="Number of Bedrooms" onChange={this.updateHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="Beds">Beds</Label>
          <Input value={this.state.beds} type="number" name="beds" id="beds" placeholder="Number of Beds" onChange={this.updateHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="bed_type">Bed Type</Label>
          <Input value={this.state.bed_type} type="select" name="bed_type" id="bed_type" onChange={this.updateHandler}>
            <option value='Real Bed' >Standard Bed</option>
            <option value = 'Couch' >Couch</option>
            <option value = 'Futon' >Futon</option>
            <option value = 'Pull-out Sofa' >Pull-Out Couch</option>
            <option value = 'Airbed' >Air Mattress</option>
          </Input>
          </FormGroup>
        <Button>Submit</Button>
      </Form>
      </Col>

      <Col xs="6">
      {/* TODO ADD  StyledValuation to app.css */}
      <div className="">
          <h3>Estimated price per night: ${this.props.prediction} </h3>
        <Plot
          data={[
            {type: 'bar', marker: { color: 'pink', width: 20,}, x: ["$0-50","$50-100","$100-150","$150-200","$200-300","$300-400","$400-500","$500-750","$750-1,000","$1,000-50,000"], y: this.props.plot_values},]}
          layout={ {width: 520, height: 340, title: 'Properties in your Area',font:{family: 'Raleway, sans-serif'}}} 
        /> 
      </div>

      </Col>

      </Row>

      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting : state.isSubmitting,
  prediction: state.prediction,
  plot_values: state.plot_values,
  bins: state.bins,
});



export default connect(mapStateToProps, { FullFormSubmit })(FullInputs);
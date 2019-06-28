import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



export default class FullInputs extends React.Component {
  state = {
    form: {
      zipCode: 0,
      proprtyType: 'propertyType',
      roomType: 'roomType',
      accommodates: 'accommodates',
      bathrooms: 'bathrooms',
      bedrooms: 'bedrooms',
      beds: 'beds',
      bedType: 'bedType',
    }
  }

  updateHandler = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };


  submitFullForm = (e) => {
    e.preventDefault();
    console.log(this.state.form);
    this.setState({
      form: {
        zipCode: 0,
        proprtyType: 'propertyType',
        roomType: 'roomType',
        accommodates: 'accommodates',
        bathrooms: 'bathrooms',
        bedrooms: 'bedrooms',
        beds: 'beds',
        bedType: 'bedType',
      }
    });

    fetch('#')
    .then(function(response) {
      return response;
    })

  };


  render() {
    return (
      <Form onSubmit={this.submitFullForm} >
        <FormGroup>
          <Label for="Zip">Zip Code</Label>
          <Input value={this.state.form} type="number" name="zipCode" id="exampleZip" placeholder="Zip Code" onChange={this.updateHandler} />
        </FormGroup>
        <FormGroup>
          <Label for="PropertyType">Property Type</Label>
          <Input value={this.state.proprtyType} type="select" name="propertyType" id="PropertyType">
            <option>Apartment</option>
            <option>House</option>
            <option>Condominium</option>
            <option>Guest House</option>
            <option>Other</option>
            <option>Guest Suite</option>
            <option>Townhouse</option>
            <option>Bungalow</option>
            <option>Loft</option>
            <option>Villa</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="RoomType">Room Type</Label>
          <Input value={this.state.roomType} type="select" name="roomType" id="RoomType">
            <option>Private Room</option>
            <option>Shared Room</option>
            <option>Entire Property</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label value={this.state.accommodates} for="Accommodates">Accommodates How Many Guests?</Label>
          <Input type="select" name="accommodates" id="Accommodates">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label for="Bathrooms">Number of Bathrooms</Label>
          <Input value={this.state.bathrooms}  type="select" name="bathrooms" id="Bathrooms">
            <option>1-2</option>
            <option>2-3</option>
            <option>3-4</option>
            <option>4+</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label for="Bedrooms">Number of Bedrooms</Label>
          <Input value={this.state.bedrooms} type="select" name="bedrooms" id="Bedrooms">
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Beds">Beds</Label>
          <Input value={this.state.beds} type="select" name="beds" id="Beds">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="BedType">Bed Type</Label>
          <Input value={this.state.bedType} type="select" name="bedType" id="BedType">
            <option>Standard Bed</option>
            <option>Foton</option>
            <option>Couch</option>
            <option>Couch</option>
            <option>Couch</option>
          </Input>
          </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

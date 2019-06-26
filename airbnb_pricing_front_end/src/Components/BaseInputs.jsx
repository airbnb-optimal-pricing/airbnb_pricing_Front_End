import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//Make sure to change the Types to be more accurate and specific before finalizing

export default class BaseInputs extends React.Component {



  submitForm(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="Zip">Zip Code</Label>
          <Input type="text" name="zip" id="exampleZip" placeholder="Zip Code" />
        </FormGroup>
        <FormGroup>
          <Label for="PropertyType">Property Type</Label>
          <Input type="select" name="propertyType" id="PropertyType">
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
          <Input type="select" name="RoomType" id="RoomType">
            <option>Single Room</option>
            <option>Entire Property</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label for="Accommodates">Accommodates How Many Guests?</Label>
          <Input type="select" name="Accommodates" id="Accommodates">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </Input>
          </FormGroup>
        <FormGroup>
          <Label for="Bathrooms">Number of Bathrooms</Label>
          <Input type="select" name="Bathrooms" id="Bathrooms">
            <option>1-2</option>
            <option>2-3</option>
            <option>3-4</option>
            <option>4+</option>
          </Input>
          </FormGroup>
          <FormGroup>
          <Label for="Bedrooms">Number of Bedrooms</Label>
          <Input type="select" name="Bedrooms" id="Bedrooms">
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="Beds">Beds</Label>
          <Input type="select" name="Beds" id="Beds">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5+</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="BedType">Bed Type</Label>
          <Input type="select" name="BedType" id="BedType">
            <option>Standard Bed</option>
            <option>Foton</option>
            <option>Couch</option>
          </Input>
          </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

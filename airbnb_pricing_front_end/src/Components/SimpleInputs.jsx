import React from 'react'

import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//Make sure to change the Types to be more accurate and specific before finalizing

export default class SimpleInputs extends React.Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }


  submitForm(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch('#', {
      method: 'Post',
      body: data,
    })
  }

  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="Zip">Zip Code</Label>
          <Input type="text" name="zip" id="exampleZip" placeholder="Zip Code" />
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
        <Button>Submit</Button>
      </Form>
    );
  }
}

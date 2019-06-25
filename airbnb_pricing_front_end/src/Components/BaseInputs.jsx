import React from 'react'

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

//Make sure to change the Types to be more accurate and specific before finalizing

export default class BaseInputs extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Where is your property located?</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="Placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Are you renting an entire home/apartment, or just a room?</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Entire Property</option>
            <option>Room</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Number of Bedrooms</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1-2</option>
            <option>2-3</option>
            <option>3-4</option>
            <option>4+</option>
          </Input>
          <FormGroup>
          <Label for="exampleSelect">Number of Bathrooms</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3+</option>
          </Input>
        </FormGroup>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

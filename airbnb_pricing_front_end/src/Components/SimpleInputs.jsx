import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { simpleFormSubmit } from '../Actions';
import { Container, Row, Col } from 'reactstrap';

//styled-components

import styled from 'styled-components';


const StyledBody = styled.body`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  margin-left: 10%;
`;

//component

class SimpleInputs extends React.Component {
  state = {
    form: {
      zipcode: '',
      bedrooms: '',
      bathrooms: '',
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

  simpleFormSubmit = (e) => {
    e.preventDefault();
    console.log('submitting:');

    this.props.simpleFormSubmit(this.state.form)
  }

  render() {
    return (
      <StyledBody>
        <Form onSubmit={this.simpleFormSubmit} >
        <Row>
          <FormGroup>
            <Col>
              <Label for="Zip">Zip Code</Label>
              <Input value={this.state.zipcode} type="number" name="zipcode" id="exampleZip" placeholder="Zip Code" onChange={this.updateHandler} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Label for="Bedrooms">Number of Bedrooms</Label>
              <Input value={this.state.bedrooms} type="number" name="bedrooms" id="examplebedrooms" placeholder="Number of Bedrooms" onChange={this.updateHandler} />
            </Col>
          </FormGroup>
          <FormGroup>
            <Col>
              <Label for="Bathrooms">Number of Bathrooms</Label>
              <Input value={this.state.bathrooms} type="number" name="bathrooms" id="examplebathrooms" placeholder="Number of Bathrooms" onChange={this.updateHandler} />
            </Col>
          </FormGroup>
        </Row>
        <Row>
          <Button>Submit</Button>
        </Row>
        </Form>
        <Row>
          <Col>
            <p>Your Property is Worth Roughly {this.props.prediction} </p>
          </Col>
        </Row>
      </StyledBody>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting : state.isSubmitting,
  prediction: state.prediction
});

export default connect(mapStateToProps, { simpleFormSubmit })(SimpleInputs);
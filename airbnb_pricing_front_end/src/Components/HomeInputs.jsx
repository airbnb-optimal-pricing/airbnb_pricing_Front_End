import React from 'react'
import { FullFormSubmit } from '../Actions';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

//styled-components

import styled from 'styled-components';

const StyledFullForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25%;
    margin-bottom: 50px;
    margin-left: 5%;
`;

const StyledValuation = styled.div`
  display: flex;
  flex-direction: column;
`;

//component

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


  render() {
    return (
      <div >
      <StyledFullForm >
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
      </StyledFullForm>

      <StyledValuation>
          <p>Your Property is Worth Roughly ${this.props.prediction} </p>
      </StyledValuation>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  isSubmitting : state.isSubmitting,
  prediction: state.prediction
});

export default connect(mapStateToProps, { FullFormSubmit })(FullInputs);


// import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import { connect } from 'react-redux';
// import { simpleFormSubmit } from '../Actions';
// import { Container, Row, Col } from 'reactstrap';

// //styled-components

// import styled from 'styled-components';


// const StyledBody = styled.body`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   width: 80%;
//   margin-left: 10%;
// `;

// //component

// class SimpleInputs extends React.Component {
//   state = {
//     form: {
//       zipcode: '',
//       bedrooms: '',
//       bathrooms: '',
//     },
//     payload: null,
//   }

//   updateHandler = e => {
//     this.setState({
//       form: {
//         ...this.state.form,
//         [e.target.name]: e.target.value
//       },
//       payload: {
//         ...this.state.payload,
//       }
//     });
//   };

//   simpleFormSubmit = (e) => {
//     e.preventDefault();
//     console.log('submitting:');

//     this.props.simpleFormSubmit(this.state.form)
//   }

//   render() {
//     return (
//       <StyledBody>
//         <Form onSubmit={this.simpleFormSubmit} >
//         <Row>
//           <FormGroup>
//             <Col>
//               <Label for="Zip">Zip Code</Label>
//               <Input value={this.state.zipcode} type="number" name="zipcode" id="exampleZip" placeholder="Zip Code" onChange={this.updateHandler} />
//             </Col>
//           </FormGroup>
//           <FormGroup>
//             <Col>
//               <Label for="Bedrooms">Number of Bedrooms</Label>
//               <Input value={this.state.bedrooms} type="number" name="bedrooms" id="examplebedrooms" placeholder="Number of Bedrooms" onChange={this.updateHandler} />
//             </Col>
//           </FormGroup>
//           <FormGroup>
//             <Col>
//               <Label for="Bathrooms">Number of Bathrooms</Label>
//               <Input value={this.state.bathrooms} type="number" name="bathrooms" id="examplebathrooms" placeholder="Number of Bathrooms" onChange={this.updateHandler} />
//             </Col>
//           </FormGroup>
//         </Row>
//         <Row>
//           <Button>Submit</Button>
//         </Row>
//         </Form>
//         <Row>
//           <Col>
//             <p>Your Property is Worth Roughly {this.props.prediction} </p>
//           </Col>
//         </Row>
//       </StyledBody>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   isSubmitting : state.isSubmitting,
//   prediction: state.prediction
// });

// export default connect(mapStateToProps, { simpleFormSubmit })(SimpleInputs);
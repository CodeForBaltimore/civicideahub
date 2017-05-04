import React from 'react';
import { Button, Form, FormGroup, Col, ControlLabel, Checkbox, FormControl } from 'react-bootstrap';

const submitHandler = (e) => {
  e.preventDefault()
}


const IdeaForm = (props) => {

  return (

    <Form horizontal style={{ padding: 100, paddingTop: 0 }}>

      <FormGroup controlId="formIdeaTitle">
        <Col componentClass={ControlLabel}>

        </Col>
        <Col>
          <FormControl type="text" placeholder="Title"
          />
        </Col>
      </FormGroup>

      <FormGroup controlId="formProblem">

        <ControlLabel></ControlLabel>
        <FormControl style={{ height: 100 }} componentClass="textarea" placeholder="Problem"
        />

      </FormGroup>


      <FormGroup controlId="formSolution">

        <ControlLabel></ControlLabel>
        <FormControl style={{ height: 100 }} componentClass="textarea" placeholder="Solution"
        />

      </FormGroup>

      <FormGroup>
        <Col smOffset={1} sm={10}>
          <Button type="submit" onClick={submitHandler}>
            submit
          </Button>
        </Col>
      </FormGroup>
    </Form>

  );
}

export default IdeaForm;


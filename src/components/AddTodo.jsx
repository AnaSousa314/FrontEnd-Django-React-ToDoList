import React from "react";
import { Form, Button } from 'react-bootstrap';

const AppTodo = () =>{
  return(
    <>
      <Form>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter ToDo Title" />
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" />
        </Form.Group>

        <Button variant="primary" type="submit">Add ToDo</Button>
      </Form>
    </>
  )
}

export default AppTodo
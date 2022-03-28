import React from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

const Todo = () =>{
  return(
    <>
      <Row className="border-bottom pt-3">
        <Col md={1}>
          <Form>
            <Form.Check type="checkbox"/>
          </Form>
        </Col>

        <Col>
          <h5>ToDo Title</h5>
          <p>ToDo Description</p>
        </Col>

        <Col md={2}>
          <Form className="d-grid gap-2">
            <Button variant='info' className='my-2 btn btn-block'>
              Edit
            </Button>
          </Form>

          <Form className="d-grid gap-2">
            <Button variant='danger' className='my-2 btn btn-block'>
              Delete
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  )
}

export default Todo;
import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

const AppTodo = ({addTodo}) =>{
  const [title,setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addTodoHandle = e =>{
    e.preventDefault()
    addTodo({
      title,
      description,
      completed: false
    })
  }
  return(
    <>
      <Form>
        <Form.Group controlId='title'>
          <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="Enter ToDo Title" onChange={e=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId='description'>
          <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" onChange={e=>setDescription(e.target.value)}/>
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2" onClick={addTodoHandle}>Add ToDo</Button>
      </Form>
    </>
  )
}

export default AppTodo
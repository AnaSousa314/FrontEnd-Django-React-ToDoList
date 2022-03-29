import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Container, Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

  const [todos,setTodos] = useState([]);

  const getTodos = async()=>{
    try {
      const response = await axios.get('/api/v1/todo/');
      const {data} = response;
      setTodos(data);

      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTodos()
  },[])


  const addTodo = async newTodo =>  {
    try {
      console.log(newTodo)
      await axios.post('/api/v1/todo/', newTodo);
      
      getTodos();
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className="wrapper">
        <Container>
          <Row className="justify-content-center pt-5">
            <Col>
              <Card className="p-5">
                <h3>My ToDo's</h3>
                <AddTodo addTodo={addTodo}/>

                {todos.map((todo,index)=>{
                  return <Todo key={index} id={todo.id} title={todo.title} description={todo.description}/>
                })}
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

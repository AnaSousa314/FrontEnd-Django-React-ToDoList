import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";
import { Container, Row, Col, Card } from "react-bootstrap";

function App() {
  return (
    <>
      <div className="wrapper">
        <Container>
          <Row className="justify-content-center pt-5">
            <Col>
              <Card className="p-5">
                <h3>My ToDo's</h3>
                <AddTodo />
                <Todo />
                <Todo />

                <Todo />

              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;

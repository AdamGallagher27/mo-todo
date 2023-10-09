import { Col, Container } from "react-bootstrap";
import TodoList from "./components/TodoList";


function App() {
  return (
    <>
      <Container className="mt-5">
        <Col>
          <TodoList />

        </Col>
      </Container>
    </>
  )
}

export default App;

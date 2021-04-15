import "./App.css";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col style={{border:"5px solid red", borderColor:"red"}}>first column</Col>
          <Col style={{border:"5px solid red", borderColor:"gray"}}>second column</Col>
        </Row>
        <Row>
          <Col style={{border:"5px solid red", borderColor:"blue"}}>second row first coulmn</Col>
          <Col style={{border:"5px solid red", borderColor:"green"}}>second row second column</Col>
          <Col style={{border:"5px solid red", borderColor:"purple"}}>second row third coulmn</Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

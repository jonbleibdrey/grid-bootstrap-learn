import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div>
      <Container style={{padding:"20px"}} fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} lg={{ span: 4, offset: 1 }} style={{ border: "5px solid red" }}>
            {" "}
            first col: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Neque quidem sequi voluptatem corrupti eum voluptatum veniam
            inventore laboriosam cupiditate corporis labore dolore pariatur,
            sunt iste accusantium ex maiores error numquam.{" "}
          </Col>
          <Col xs={8} lg={"auto"} style={{ border: "5px solid blue" }}>
            second col: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur repellat non voluptate ea commodi officia deleniti omnis?
            Ea repellat pariatur tenetur repudiandae hic magnam asperiores.
            Quaerat vero quas iure cupiditate.{" "}
          </Col>
        </Row >
        <Row>
          <Col xs={6} lg={6} style={{ border: "5px solid purple" }}>
            second row third col: Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A veritatis ipsa numquam, quo tempora similique
            aut quasi, rerum voluptates consequuntur mollitia vitae. A officiis
            exercitationem voluptate hic consequatur! Asperiores, magnam.{" "}
          </Col>
          <Col xs={6} lg={6} style={{ border: "5px solid green" }}>
            second row first col: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis, provident in. A placeat iure tempore
            quidem nisi consequatur eaque praesentium aut voluptate dolorem?
            Eaque, aliquid magni voluptas esse itaque modi?{" "}
          </Col>
          <Col xs={6} lg={5} style={{ border: "5px solid yellow" }}>
            second row second col: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Minus ipsa rem recusandae! Alias aperiam officiis
            praesentium laboriosam magni, repellendus hic architecto eos a
            eligendi quod tempore animi neque. Tempore, voluptatibus?{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;

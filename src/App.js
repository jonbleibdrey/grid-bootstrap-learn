import { Container, Col, Row } from "react-bootstrap";
import Liker from "../src/component/Liker"
import React, {useState} from 'react'
import DataComp from "./component/DataComp";
import Comment from "../src/component/Comment"

function App() {
  const [data, setData] = useState({
    name:"jonathan",
    lastName:'bleibdrey',
    hobbie:"fun shit",
    loveLife:"everywhere",
  })

  return (
    <div>
      <Container style={{padding:"20px", border:"5px solid red"}} fluid>
        <Row className="justify-content-md-center">
          <Col xs={12} lg={4} style={{ border: "5px solid red" }}>
            <img src="../logo192.png" alt="hello" style={{display:"block", margin:"auto"}}/>
            {" "}
            first col: Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Neque quidem sequi voluptatem corrupti eum voluptatum veniam
            inventore laboriosam cupiditate corporis labore dolore pariatur,
            sunt iste accusantium ex maiores error numquam.{" "}
            <Liker/>
            <DataComp name={data.name} last={data.lastName} hobbie={data.hobbie} love={data.love}/>
            <Comment/>
          </Col>
          <Col xs={8} lg={"auto"} style={{ border: "5px solid blue" }}>
          <img src="../logo192.png" alt="hello" style={{display:"block", margin:"auto"}}/>
            second col: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Aspernatur repellat non voluptate ea commodi officia deleniti omnis?
            Ea repellat pariatur tenetur repudiandae hic magnam asperiores.
            Quaerat vero quas iure cupiditate.{" "}
            <Liker/>
            <DataComp name={data.name} last={data.lastName} hobbie={data.hobbie} love={data.love}/>
            <Comment/>
          </Col>
        </Row >
        <Row>
          <Col xs={6} lg={3} style={{ border: "5px solid purple" }}>
          <img src="../logo192.png" alt="hello" style={{display:"block", margin:"auto"}}/>
            second row third col: Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. A veritatis ipsa numquam, quo tempora similique
            aut quasi, rerum voluptates consequuntur mollitia vitae. A officiis
            exercitationem voluptate hic consequatur! Asperiores, magnam.{" "}
            <Liker/>
            <DataComp name={data.name} last={data.lastName} hobbie={data.hobbie} love={data.love}/>
            <Comment/>
          </Col>
          <Col xs={6} lg={{ span: 3, offset: 6 }} style={{ border: "5px solid green" }}>
          <img src="../logo192.png" alt="hello" style={{display:"block", margin:"auto"}}/>
            second row first col: Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Perferendis, provident in. A placeat iure tempore
            quidem nisi consequatur eaque praesentium aut voluptate dolorem?
            Eaque, aliquid magni voluptas esse itaque modi?{" "}
            <Liker/>
            <DataComp name={data.name} last={data.lastName} hobbie={data.hobbie} love={data.love}/>
            <Comment/>
          </Col>
          <Col xs={6} lg={'auto'} style={{ border: "5px solid yellow" }}>
          <img src="../logo192.png" alt="hello" style={{display:"block", margin:"auto"}}/>
            second row second col: Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Minus ipsa rem recusandae! Alias aperiam officiis
            praesentium laboriosam magni, repellendus hic architecto eos a
            eligendi quod tempore animi neque. Tempore, voluptatibus?{" "}
            <Liker/>
            <DataComp name={data.name} last={data.lastName} hobbie={data.hobbie} love={data.love}/>
            <Comment/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


export default App;

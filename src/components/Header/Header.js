import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    // <Container className="d-flex justify-content-between">
    //   <Row>
    //     <Col md={2}>GoAbroadEdu</Col>
    //   </Row>
    //   <Row>
    //     <Col md={10}>
    //       <ul>
    //         <Link>
    //           <li>Home</li>
    //         </Link>
    //         <li>Home</li>
    //         <li>Home</li>
    //       </ul>
    //     </Col>
    //   </Row>
    // </Container>
    <Navbar bg="light" variant="light">
      <Container>
        <Navbar.Brand to="/home">GoAbroadEdu</Navbar.Brand>
        <Nav className="">
          <Nav.Link className="link">
            <Link to="/home">Home</Link>
          </Nav.Link>
          <Nav.Link to="/services">Services</Nav.Link>
          <Nav.Link to="/instructores">Instructors</Nav.Link>
          <Nav.Link to="/about">About</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

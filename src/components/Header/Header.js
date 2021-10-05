import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <Container className="d-flex justify-content-between align-items-center">
      <Row className="header">
        <Col className="edu-name" md={2}>
          GoAbroadEdu
        </Col>
      </Row>
      <Row>
        <Col md={10}>
          <div className="d-flex ">
            <Link className="link " to="/home">
              Home
            </Link>
            <Link className="link" to="/courses">
              Courses
            </Link>
            <Link className="link" to="/instructors">
              Instructors
            </Link>
            <Link className="link" to="/about">
              About
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;

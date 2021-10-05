import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Course.css";

const Course = (props) => {
  const { name, img, outline, price, duration } = props.course;
  return (
    <Col>
      <Card className="card-data">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>
            <span className="fw-bold">Name: </span>
            <span className="info">{name}</span>
          </Card.Title>
          <h5>
            <span className="fw-bold">Outline: </span>
            <span className="info">{outline}</span>
          </h5>
          <h5>
            <span className="fw-bold">Price: </span>
            <span className="info">Tk. {price}</span>
          </h5>
          <h5>
            <span className="fw-bold">Duration: </span>
            <span className="info">{duration}</span>
          </h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;

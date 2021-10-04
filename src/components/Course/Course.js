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
            Name: <span className="info">{name}</span>
          </Card.Title>
          <h5>
            Outline: <span className="info">{outline}</span>
          </h5>
          <h5>
            Price: <span className="info">{price}</span>
          </h5>
          <h5>
            Duration: <span className="info">{duration}</span>
          </h5>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Course;

import React from "react";
import { Card, Col } from "react-bootstrap";

const Instructor = (props) => {
  const { name, img, scores, experience, expertise } = props.instructor;
  return (
    <div>
      <Col>
        <Card>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>Name: {name}</Card.Title>
            <Card.Text>Expertise: {expertise}</Card.Text>
            <Card.Text>Price: {scores}</Card.Text>
            <Card.Text>Duration: {experience}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Instructor;

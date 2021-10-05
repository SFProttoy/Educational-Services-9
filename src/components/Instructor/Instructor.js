import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Instructor.css";

const Instructor = (props) => {
  const { name, img, scores, experience, expertise } = props.instructor;
  return (
    <div>
      <Col>
        <Card className="cards">
          <Card.Img src={img} />
          <Card.Body>
            <Card.Title>
              <span className="fw-bold">Name:</span> {name}
            </Card.Title>
            <h5>
              <span className="fw-bold">Expertise:</span> {expertise}
            </h5>
            <h5>
              <span className="fw-bold">Scores:</span> {scores}
            </h5>
            <h5>
              <span className="fw-bold">Experience:</span> {experience}
            </h5>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Instructor;

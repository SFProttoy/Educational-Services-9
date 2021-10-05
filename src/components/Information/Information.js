import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Information.css";

const Information = () => {
  const [homeCourses, setHomeCourses] = useState([]);

  useEffect(() => {
    fetch("./home.JSON")
      .then((res) => res.json())
      .then((data) => setHomeCourses(data));
  }, []);

  return (
    <div className="info">
      <h1 className="info-header">
        Our <span className="courses">Exclusive Courses</span>
      </h1>
      <Row xs={1} md={4} className="container g-4 mx-auto">
        {homeCourses.map((homeCourse) => (
          <Col key={homeCourse.id}>
            <Card className="card-data">
              <Card.Img variant="top" src={homeCourse.img} />
              <Card.Body>
                <Card.Title>{homeCourse.name}</Card.Title>
                <Card.Text className="description">{homeCourse.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Information;

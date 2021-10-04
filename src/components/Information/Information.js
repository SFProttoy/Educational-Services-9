import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import "./Information.css";
const Information = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./home.JSON")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="info">
      <h1 className="info-header">
        Our <span className="courses">Exclusive Courses</span>
      </h1>
      <Row xs={1} md={4} className="container g-4 mx-auto">
        {courses.map((course) => (
          <Col key={course.id}>
            <Card className="card-data">
              <Card.Img variant="top" src={course.img} />
              <Card.Body>
                <Card.Title>{course.name}</Card.Title>
                <Card.Text className="description">{course.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Information;

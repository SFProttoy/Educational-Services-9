import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Instructor from "../Instructor/Instructor";
import "./Intructors.css";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch("./instructors.JSON")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <div>
      <h1 className="teacher">Our Experienced Instructors</h1>
      <Row xs={1} md={4} className="container g-4 mx-auto">
        {instructors.map((instructor) => (
          <Instructor key={instructor.id} instructor={instructor}></Instructor>
        ))}
      </Row>
    </div>
  );
};

export default Instructors;

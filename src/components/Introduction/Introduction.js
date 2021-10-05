import React from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="container">
      <div className="row d-flex align-items-center justify-content-center bg">
        <div className="col-md-6">
          <h2>
            Want To Get Admitted In <br />
            <span className="top-school">Top Schools in the World ?</span>
          </h2>
          <Link to="/about">
            <Button className="contact-btn">Know about us</Button>
          </Link>
        </div>
        <div className="col-md-6">
          <Image src="https://i.ibb.co/hY47FkG/img.jpg" fluid />
        </div>
      </div>
    </div>
  );
};

export default Introduction;

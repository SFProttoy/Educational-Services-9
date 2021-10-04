import React from "react";
import { Image } from "react-bootstrap";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div>
      <Image
        className="notfound"
        src="https://i.ibb.co/Z6f3skX/pexels-ann-h-1888015.jpg"
        alt="nf"
        fluid
      />
    </div>
  );
};

export default NotFound;

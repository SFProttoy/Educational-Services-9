import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Information from "../Information/Information";
import Introduction from "../Introduction/Introduction";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Introduction></Introduction>
      <Information></Information>
      <Link to="/courses">
        <Button className="btn btn-success see-btn">See more..</Button>
      </Link>
    </div>
  );
};

export default Home;

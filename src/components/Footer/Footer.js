import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Footer.css";

const Footer = () => {
  const fb = <FontAwesomeIcon icon={faFacebook} />;
  const yt = <FontAwesomeIcon icon={faYoutube} />;
  const ld = <FontAwesomeIcon icon={faLinkedin} />;

  const ig = <FontAwesomeIcon icon={faInstagram} />;

  return (
    <div className="container footer">
      <div className="row">
        <div className="col-md-6 sections">
          <h2>Contact us:</h2>
          <h4>Phone: +88-0155555555</h4>
          <h5>Email: abd05@edu.com</h5>
        </div>
        <div className="col-md-6 sections">
          <h2>Connect with us via:</h2>
          <span className="icons">{fb}</span>
          <span className="icons">{yt}</span>
          <span className="icons">{ld}</span>
          <span className="icons">{ig}</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

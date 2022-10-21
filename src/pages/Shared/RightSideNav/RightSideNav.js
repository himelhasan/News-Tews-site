import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaGithub,
  FaPinterest,
  FaLinkedin,
} from "react-icons/fa";
import BrandCarosuel from "../BrandCarosuel/BrandCarosuel";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <ButtonGroup vertical>
          <Button variant="outline-dark">
            <FaGoogle /> Log in with Google
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaGithub />
            Log in with Github
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <h4>Find Us on:</h4>
        <ButtonGroup vertical>
          <Button variant="outline-dark">
            <FaFacebook /> Facebook
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaPinterest /> Pinterest
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaLinkedin /> LinkedIn
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaInstagram /> Instagram
          </Button>
          <Button variant="outline-dark">
            {" "}
            <FaWhatsapp /> Whatsapp
          </Button>
        </ButtonGroup>
      </div>
      <div>
        <h4> Sponsored by </h4>
        <BrandCarosuel></BrandCarosuel>
      </div>
    </div>
  );
};

export default RightSideNav;

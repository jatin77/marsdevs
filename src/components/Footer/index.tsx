import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { IoLogoLinkedin } from "react-icons/io";
import { BsTwitter } from "react-icons/bs";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Footer = () => {
  return (
    <div>
      <Container className="py-5">
        <Row xs="1" md="2" lg="4" className="g-4">
          <Col>
            <Image
              src="https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg"
              alt="sales"
              rounded
              style={{ width: "60px", height: "60px" }}
            />
            <p className="mt-3 mb-4">
              <small>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the type specimen book.
              </small>
            </p>
            <div className="d-flex mb-4">
              <AiFillInstagram size={"1.5rem"} />
              <BsFacebook size={"1.5rem"} className="mx-3" />
              <IoLogoLinkedin size={"1.5rem"} />
              <BsTwitter size={"1.5rem"} className="ms-3" />
            </div>
            <p>Marsdevs @2023, All rights reserved</p>
          </Col>
          <Col>
            <h4 className="mb-4">Company</h4>
            <p>
              <small>Contact</small>
            </p>
            <p>
              <small>Reviews</small>
            </p>
            <p>
              <small>Services</small>
            </p>
            <p>
              <small>Price Calculator</small>
            </p>
          </Col>
          <Col>
            <h4 className="mb-4">Social Media</h4>
            <p>
              <small>Twitter</small>
            </p>
            <p>
              <small>Instagram</small>
            </p>
            <p>
              <small>Facebook</small>
            </p>
            <p>
              <small>Linkedin</small>
            </p>
          </Col>
          <Col>
            <Form>
              <Form.Label className="text-uppercase">
                <small>Subscribe to news letter</small>
              </Form.Label>
              <InputGroup className="mb-3" size="lg">
                <Form.Control
                  placeholder="Enter email address"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />

                <Button variant="primary" id="button-addon2">
                  Join
                </Button>
              </InputGroup>
            </Form>
            <div className="d-flex">
              <div>
                <p className="text-uppercase mb-0">
                  <small>Call us</small>
                </p>
                <p>+911234567890</p>
              </div>
              <div className="ms-3">
                <p className="text-uppercase mb-0">
                  <small>Email us</small>
                </p>
                <p>info@marsdevs.com</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

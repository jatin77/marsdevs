import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

const ContactUs = () => {
  return (
    <div className="bg-light py-5 mt-5">
      <Container>
        <Row xs="1" md="2" className="g-4">
          <Col>
            <h3 className="mb-3">
              Dump your tech needs here! We'll get back to you, faster than
              flash!
            </h3>
            <p className="text-muted">
              <small>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </small>
            </p>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="fname">First name</Form.Label>
                    <Form.Control
                      type="text"
                      id="fname"
                      placeholder="First name"
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label htmlFor="lname">Last name</Form.Label>
                    <Form.Control
                      type="text"
                      id="lname"
                      placeholder="Last name"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="email">Email</Form.Label>
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="you@company.com"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="phone">Phone Number</Form.Label>
                <InputGroup className="mb-3">
                  <DropdownButton
                    variant="outline-secondary"
                    title="Country"
                    id="phone"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
                  <Form.Control aria-label="Text input with dropdown button" />
                </InputGroup>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label htmlFor="message">Message</Form.Label>
                <FloatingLabel label="" controlId="floatingTextarea2">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    id="message"
                  />
                </FloatingLabel>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Check
                  type="checkbox"
                  id="agree"
                  label="You agree to our friendly privacy policy"
                />
              </Form.Group>
              <Button className="w-100 mt-3" variant="primary">
                Primary
              </Button>
            </Form>
          </Col>
          <Col>
            <Image
              src="https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg"
              alt="sales"
              fluid
              rounded
              className="h-100"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;

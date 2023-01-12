import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import {
  BsArrowRight,
  BsWhatsapp,
  BsFillChatLeftTextFill,
} from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";

const Services = () => {
  return (
    <div className="pb-5">
      <Container>
        <Row xs="1" md="2" lg="3" className="g-4">
          {[...Array(8).keys()].map((item) => (
            <Col>
              <Card>
                <Card.Body>
                  <Image
                    src="https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg"
                    alt="sales"
                    rounded
                    style={{ width: "60px", height: "60px" }}
                  />
                  <Card.Title className="mt-4 mb-3">MVP Development</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex align-items-center">
                    <p className="mb-0 me-3">Learn more</p>
                    <BsArrowRight />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col>
            <Button
              className="w-100 d-flex align-items-center justify-content-center"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              <BiPhoneCall /> <span className="ms-2">Call us now</span>
            </Button>
            <Button
              className="w-100 my-5 d-flex align-items-center justify-content-center"
              size="lg"
              variant="success"
              id="button-addon2"
            >
              <BsWhatsapp /> <span className="ms-2">Whatsapp us</span>
            </Button>
            <Button
              className="w-100 d-flex align-items-center justify-content-center"
              size="lg"
              variant="primary"
              id="button-addon2"
            >
              <BsFillChatLeftTextFill /> <span className="ms-2">Live chat</span>
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;

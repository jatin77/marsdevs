import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import { FaUserAlt } from "react-icons/fa";
import "./style.scss";

const styleReviewCard: any = {
  width: "15rem",
  position: "absolute",
  left: "-3rem",
  bottom: "30%",
};

const styleClientsCard: any = {
  width: "15rem",
  position: "absolute",
  right: "2rem",
  bottom: "15%",
};

const Landing = () => {
  return (
    <div className="w-100 vh-100 landing-cover">
      <Container className="vh-100">
        <Row className="h-100">
          <Col className="d-flex flex-column justify-content-center text-light">
            <h1>
              <b>
                World's accesssible by fingertips? <br />
                And you should be too!
              </b>
            </h1>
            <p className="lead mt-2">
              The best development team here to help you with excellent tech and
              smooth success!!!
            </p>
            <div className="d-flex mt-4">
              <Button variant="primary" className="me-3">
                Connect with us
              </Button>
              <Button variant="outline-light">Get started</Button>
            </div>
          </Col>
          <Col className="d-none d-md-block position-relative">
            <div className="d-flex flex-column justify-content-center h-100">
              <Image
                src="https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg"
                alt="sales"
                fluid
                rounded
              />
            </div>
            <Card
              bg="light"
              style={styleReviewCard}
              className="d-flex flex-column py-2 px-2 border-0"
            >
              <h6 className="mb-0">⭐ 5 star client reviews</h6>
              <ProgressBar className="w-100 mt-2" now={60} />
            </Card>
            <Card
              bg="light"
              style={styleClientsCard}
              className="d-flex flex-column py-2 px-2 border-0"
            >
              <h6 className="mb-0">
                <FaUserAlt size={"12px"} /> 100+ Clients
              </h6>
              <ProgressBar className="w-100 mt-2" now={60} />
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;

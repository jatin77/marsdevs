import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Quote = () => {
  return (
    <div className="bg-light py-5">
      <Container className="p-5" style={{ background: "#fff" }}>
        <h1 className="mb-5">Project Quote Calculator</h1>
        {[...Array(3).keys()].map((item) => (
          <Row xs="1" md="2" className="g-4 mb-5">
            <Col>
              <p className="text-uppercase text-primary mt-4">
                number of pages
              </p>
            </Col>
            <Col className="d-flex align-items-center">
              <ProgressBar className="w-100 mt-2" now={60} />
              <h2 className="mb-0 ms-5">
                <Badge bg="secondary">10-50</Badge>
              </h2>
            </Col>
          </Row>
        ))}
        <Button size="lg" className="mt-5" variant="primary">
          See Pricing
        </Button>
      </Container>
    </div>
  );
};

export default Quote;

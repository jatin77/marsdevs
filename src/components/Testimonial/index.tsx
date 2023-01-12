import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { RiDoubleQuotesR } from "react-icons/ri";
import "./style.scss";

const Testimonial = () => {
  return (
    <div className="my-5 py-5">
      <p className="text-center">Our Testimonial</p>
      <h1 className="text-capitalize text-center mb-5">
        What our client saying
      </h1>
      <Container>
        <Row xs="1" md="2" lg="3" className="g-4">
          {[...Array(3).keys()].map((item) => (
            <Col>
              <Card className="testimonial-card border-0">
                <Card.Body>
                  <div>⭐ ⭐ ⭐ ⭐ ⭐ </div>
                  <Card.Text className="mt-2 text-muted">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content.
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-5">
                    <div className="d-flex">
                      <Image
                        src="https://s40424.pcdn.co/in/wp-content/uploads/2022/03/What-is-the-Difference-Between-Sales-and-Marekting-1.jpg"
                        alt="sales"
                        className="testimonial-img"
                        style={{ width: "60px", height: "60px" }}
                      />
                      <div className="ms-3">
                        <h5>Company xyz</h5>
                        <p>
                          <small>Founder</small>
                        </p>
                      </div>
                    </div>
                    <RiDoubleQuotesR className="text-muted" size={"4rem"} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;

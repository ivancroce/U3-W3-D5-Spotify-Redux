import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container fluid>
      <Row className="px-2">
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex mt-3 mb-5">
          <Nav className="w-100 justify-content-evenly nav-link-hover">
            <Nav.Link href="#">TRENDING</Nav.Link>
            <Nav.Link href="#">PODCAST</Nav.Link>
            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#">NEW RELEASES</Nav.Link>
            <Nav.Link href="#">DISCOVER</Nav.Link>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};
export default MainSection;

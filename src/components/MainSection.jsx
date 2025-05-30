import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

const MainSection = () => {
  return (
    <Container fluid>
      <Row>
        <Col xs={9} lg={11} className="mainLinks d-none d-md-flex">
          <Nav className="w-100 justify-content-evenly">
            <Nav.Link href="#">TRENDING</Nav.Link>
            <Nav.Link href="#">PODCAST</Nav.Link>
            <Nav.Link href="#">MOODS AND GENRES</Nav.Link>
            <Nav.Link href="#">NEW RELEASES</Nav.Link>
            <Nav.Link href="#">DISCOVER</Nav.Link>
          </Nav>
        </Col>
      </Row>
      {/* <Row>
       { <Col xs={10}>
          <div id="rock">
            <h2>Rock Classics</h2>
            <Row id="rockSection" className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4}>
              <Col>
                <div className="p-2 border">Album Rock 1 Placeholder</div>
              </Col>
              <Col>
                <div className="p-2 border">Album Rock 2 Placeholder</div>
              </Col>
              <Col>
                <div className="p-2 border">Album Rock 3 Placeholder</div>
              </Col>
              <Col>
                <div className="p-2 border">Album Rock 4 Placeholder</div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="pop">
            <h2>Pop Culture</h2>
            <Row id="popSection" className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4}>
              <Col>
                <Col>
                  <div className="p-2 border">Album Pop 4 Placeholder</div>
                </Col>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>

      <Row>
        <Col xs={10}>
          <div id="hiphop">
            <h2>#HipHop</h2>
            <Row id="hipHopSection" className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4}>
              <Col></Col>
            </Row>
          </div>
        </Col>
      </Row>} */}
    </Container>
  );
};
export default MainSection;

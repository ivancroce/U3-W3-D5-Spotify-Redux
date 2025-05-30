import { Container, Row, Col, Image } from "react-bootstrap";
import next from "../../public/assets/playerbuttons/next.png";
import play from "../../public/assets/playerbuttons/play.png";
import prev from "../../public/assets/playerbuttons/prev.png";
import repeat from "../../public/assets/playerbuttons/repeat.png";
import shuffle from "../../public/assets/playerbuttons/shuffle.png";

const Player = () => {
  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 10, offset: 2 }}>
          <Row className="h-100 flex-column justify-content-center align-items-center">
            <Col xs={6} md={4} className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <Image src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <Image src={prev} alt="prev" />
                </a>
                <a href="#">
                  <Image src={play} alt="play" />
                </a>
                <a href="#">
                  <Image src={next} alt="next" />
                </a>
                <a href="#">
                  <Image src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;

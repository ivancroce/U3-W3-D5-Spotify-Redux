import { Container, Row, Col, Image } from "react-bootstrap";
import next from "../../public/assets/playerbuttons/next.png";
import play from "../../public/assets/playerbuttons/play.png";
import prev from "../../public/assets/playerbuttons/prev.png";
import repeat from "../../public/assets/playerbuttons/repeat.png";
import shuffle from "../../public/assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    // To fix all the style
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg={{ span: 4, offset: 2 }}>
          {currentSong && (
            <div className="text-light">
              <div className="d-flex gap-3">
                <Image src={currentSong.album.cover_medium} fluid alt="track" style={{ maxWidth: "60px", maxHeight: "60px" }} />
                <div>
                  <p>Now Playing: {currentSong.title}</p>
                  <p>Artist: {currentSong.artist.name}</p>
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col lg={{ span: 6 }}>
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

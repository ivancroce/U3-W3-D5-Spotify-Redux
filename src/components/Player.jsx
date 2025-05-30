import { Container, Row, Col, Image, ProgressBar, Button } from "react-bootstrap";
import next from "../../public/assets/playerbuttons/next.png";
import play from "../../public/assets/playerbuttons/play.png";
import prev from "../../public/assets/playerbuttons/prev.png";
import repeat from "../../public/assets/playerbuttons/repeat.png";
import shuffle from "../../public/assets/playerbuttons/shuffle.png";
import { useSelector } from "react-redux";

const Player = () => {
  const currentSong = useSelector((state) => state.music.currentSong);

  return (
    <Container fluid className="fixed-bottom bg-container player-container">
      <Row className="mx-0 h-100 align-items-center player-row">
        <Col xs={12} sm={5} md={4} lg={4} xl={4} className="pe-0 d-none d-sm-flex align-items-center">
          {currentSong && (
            <div className="now-playing d-flex align-items-center text-light">
              <Image src={currentSong.album.cover_medium} fluid alt="album cover" style={{ width: "60px", height: "60px", marginRight: "10px" }} rounded />
              <div className="text-light">
                <p className="mb-0 small fw-bold">{currentSong.title}</p>
                <p className="mb-0 small">{currentSong.artist.name}</p>
              </div>
            </div>
          )}
        </Col>

        <Col xs={12} sm={7} md={8} lg={8} xl={4} className="px-2 px-lg-0">
          <div className="playerControls">
            <div className="d-flex justify-content-center align-items-center mb-2 gap-5">
              <a href="#">
                <Image src={shuffle} alt="shuffle" />
              </a>
              <a href="#">
                <Image src={prev} alt="prev" />
              </a>
              <a href="#">
                <Image src={play} alt="play" />
              </a>{" "}
              <a href="#">
                <Image src={next} alt="next" />
              </a>
              <a href="#">
                <Image src={repeat} alt="repeat" />
              </a>
            </div>
          </div>
          <div className="progress mt-3">
            <ProgressBar />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;

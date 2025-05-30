import { Container, Row, Col, Image, ProgressBar, Button } from "react-bootstrap";
import next from "../assets/playerbuttons/next.png";
import play from "../assets/playerbuttons/play.png";
import prev from "../assets/playerbuttons/prev.png";
import repeat from "../assets/playerbuttons/repeat.png";
import shuffle from "../assets/playerbuttons/shuffle.png";
import { useDispatch, useSelector } from "react-redux";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { setLike } from "../redux/actions/musicAction";

const Player = () => {
  const { currentSong, currentSection, results } = useSelector((state) => state.music);
  // console.log("Player currentSong:", currentSong);
  // console.log("Player currentSection:", currentSection);
  // console.log("Player results:", results);

  const dispatch = useDispatch();

  // to find the currentSong in the active currentSection
  // because only in currentSection we have the updated "like" value from Redux
  const songWithLike = currentSong && results[currentSection]?.find((s) => s.id === currentSong.id);

  // when clicking on the Heart icon, dispatch an action to Redux to toggle the "like" status
  // only dispatch if both currentSong and currentSection are defined
  const handleLikeClick = () => {
    if (currentSong && currentSection) {
      dispatch(setLike(currentSection, currentSong.id));
    }
  };

  return (
    <Container fluid className="fixed-bottom bg-container player-container">
      <Row className="mx-0 h-100 align-items-center player-row">
        <Col xs={12} sm={5} md={4} lg={4} xl={4} className="pe-0 d-none d-sm-flex align-items-center">
          {currentSong && (
            <div className="now-playing d-flex align-items-center text-light">
              <Image src={currentSong.album.cover_medium} fluid alt="album cover" style={{ width: "60px", height: "60px", marginRight: "10px" }} rounded />
              <div className="text-light">
                <p className="mb-0 small fw-bold">{currentSong.title}</p>
                <span className="mb-0 me-2 small">{currentSong.artist.name}</span>
                <Button onClick={handleLikeClick} variant="link" className="text-white p-0 ms-3">
                  {songWithLike?.like ? <HeartFill style={{ color: "#1DB954" }} /> : <Heart className="text-white" />}
                </Button>
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

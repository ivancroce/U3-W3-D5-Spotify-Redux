import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { fetchMusic, setCurrentSong, setLike } from "../redux/actions/musicAction";
import { Heart, HeartFill } from "react-bootstrap-icons";

const MusicSection = ({ title, artist, sectionNumber }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.results);

  const handleLikeClick = (id) => {
    dispatch(setLike(sectionNumber, id));
  };

  useEffect(() => {
    dispatch(fetchMusic(artist, sectionNumber));
  }, [artist, dispatch, sectionNumber]);

  const handleSongClick = (song) => {
    dispatch(setCurrentSong(song));
  };

  // to fix col and style
  return (
    <Container fluid>
      <Row className="mb-4">
        <Col xs={10}>
          <h2 className="text-white">{title}</h2>
          <Row className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4}>
            {songs &&
              songs[sectionNumber] &&
              songs[sectionNumber].map((song) => (
                <Col key={song.id} className="mb-4 text-center">
                  <Image src={song.album.cover_medium} fluid alt="track" className="mb-2" onClick={() => handleSongClick(song)} style={{ cursor: "pointer" }} />
                  <div className="text-center">
                    <p className="text-white small p-0 m-0">Track: {song.title}</p>
                    <p className="text-white small p-0 m-0">Artist: {song.artist.name}</p>
                    <Button variant="link" className="p-0 m-0" onClick={() => handleLikeClick(song.id)}>
                      {song.like ? <HeartFill className="text-danger" /> : <Heart className="text-white" />}
                    </Button>
                  </div>
                </Col>
              ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default MusicSection;

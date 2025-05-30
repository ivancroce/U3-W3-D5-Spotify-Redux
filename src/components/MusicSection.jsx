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
    <Container>
      <Row className="py-3">
        <h2 className="text-white">{title}</h2>
        {songs &&
          songs[sectionNumber].map((song) => (
            <Col key={song.id} xs={12} sm={6} lg={3} className="d-flex flex-column text-center">
              <Image src={song.album.cover_medium} fluid alt="track" className="mb-2" onClick={() => handleSongClick(song)} />
              <Button className="bg-transparent border border-0" onClick={() => handleLikeClick(song.id)}>
                {!song.like ? <Heart className="text-white" /> : <HeartFill className="text-white" />}
              </Button>
              <p className="text-white">
                Track: {song.title}
                <br />
                Artist: {song.artist.name}
              </p>
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default MusicSection;

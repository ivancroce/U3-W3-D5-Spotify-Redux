import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { fetchMusic, setCurrentSong, setLike } from "../redux/actions/musicAction";
import { Heart, HeartFill } from "react-bootstrap-icons";

const MusicSection = ({ title, artist, sectionNumber, sectionId }) => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.music.results);
  const searchResults = useSelector((state) => state.music.searchResults);

  const handleLikeClick = (id) => {
    dispatch(setLike(sectionNumber, id));
  };

  useEffect(() => {
    if (sectionNumber !== "search") dispatch(fetchMusic(artist, sectionNumber));
  }, [artist, dispatch, sectionNumber]);

  const handleSongClick = (song) => {
    dispatch(setCurrentSong(song, sectionNumber));
  };

  return (
    <Container fluid>
      <Row className="mb-4">
        <Col xs={10}>
          <h2 className="text-white">{sectionNumber === "search" && searchResults.length > 0 ? "Search Results" : title}</h2>
          <Row className="imgLinks py-3" xs={1} sm={2} lg={3} xl={4} id={sectionId || undefined}>
            {sectionNumber === "search" && searchResults.length > 0
              ? searchResults.slice(0, 4).map((song) => (
                  <Col key={song.id} className="mb-4 text-center">
                    <Image
                      src={song.album.cover_medium}
                      fluid
                      alt="track"
                      className="mb-2"
                      onClick={() => handleSongClick(song)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="text-center">
                      <p className="text-white small p-0 m-0">Track: {song.title}</p>
                      <p className="text-white small p-0 m-0">Artist: {song.artist.name}</p>
                      <Button variant="link" className="p-0 m-0" onClick={() => handleLikeClick(song.id)}>
                        {song.like ? <HeartFill style={{ color: "#1DB954" }} /> : <Heart className="text-white" />}
                      </Button>
                    </div>
                  </Col>
                ))
              : songs &&
                songs[sectionNumber] &&
                songs[sectionNumber].map((song) => (
                  <Col key={song.id} className="mb-4 text-center">
                    <Image
                      src={song.album.cover_medium}
                      fluid
                      alt="track"
                      className="mb-2"
                      onClick={() => handleSongClick(song)}
                      style={{ cursor: "pointer" }}
                    />
                    <div className="text-center">
                      <p className="text-white small p-0 m-0">Track: {song.title}</p>
                      <p className="text-white small p-0 m-0">Artist: {song.artist.name}</p>
                      <Button variant="link" className="p-0 m-0" onClick={() => handleLikeClick(song.id)}>
                        {song.like ? <HeartFill style={{ color: "#1DB954" }} /> : <Heart className="text-white" />}
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

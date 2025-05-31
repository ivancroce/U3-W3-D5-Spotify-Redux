import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import MusicSection from "./components/MusicSection";
import YourLibrary from "./components/YourLibrary";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";

function App() {
  const searchResults = useSelector((state) => state.music.searchResults);

  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>

        <Col xs={12} md={9} className="offset-md-3 mainPage px-0">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <MainSection />
                  {searchResults.length > 0 ? (
                    <MusicSection title="Search Results" sectionNumber="search" />
                  ) : (
                    <>
                      <MusicSection title="Rock Classics" artist="queen" sectionNumber="section1" />
                      <MusicSection title="Pop Culture" artist="katyperry" sectionNumber="section2" />
                      <MusicSection title="#HipHop" artist="eminem" sectionNumber="section3" sectionId="hipHopSection" />
                    </>
                  )}
                </>
              }
            />
            <Route path="/library" element={<YourLibrary />} />
          </Routes>
        </Col>

        <Player />
      </Row>
    </Container>
  );
}

export default App;

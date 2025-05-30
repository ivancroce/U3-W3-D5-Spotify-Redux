import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainSection from "./components/MainSection";
import Player from "./components/Player";
import MusicSection from "./components/MusicSection";

function App() {
  return (
    <Container fluid>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>

        <Col xs={12} md={9} className="offset-md-3 mainPage">
          <MainSection />
          <MusicSection title="Rock Classics" artist="queen" sectionNumber="section1" />
          <MusicSection title="Pop Culture" artist="katyperry" sectionNumber="section2" />
          <MusicSection title="#HipHop" artist="eminem" sectionNumber="section3" />
        </Col>

        {/* Player */}
        <Player />
      </Row>
    </Container>
  );
}

export default App;

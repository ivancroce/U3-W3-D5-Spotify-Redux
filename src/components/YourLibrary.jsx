import { Container } from "react-bootstrap";
import MusicSection from "./MusicSection";

const YourLibrary = () => {
  return (
    <Container fluid className="pt-5">
      <MusicSection title="Your Library To Continue" />

      <h1 className="text-white mb-5">🚧 Work in progress 😁 🚧</h1>
      <img src="https://media.tenor.com/i3lImBg2UEQAAAAM/scaler-create-impact.gif" alt="" style={{ width: "400px" }} />
    </Container>
  );
};

export default YourLibrary;

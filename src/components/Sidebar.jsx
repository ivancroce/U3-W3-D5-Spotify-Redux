import { Button, Container, Form, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../../public/assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";

const Sidebar = () => {
  return (
    <Navbar variant="black" expand="md" className="fixed-left justify-content-between" id="sidebar">
      <Container fluid className="flex-column align-items-start">
        {/* Logo */}
        <Navbar.Brand href="/">
          <Image src={logo} alt="Spotify Logo" width="131" height="40" />
        </Navbar.Brand>
        {/* Home + Your Library */}
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="flex-column">
            <Nav.Link href="#" className="d-flex align-items-center ps-0 my-2">
              <HouseDoorFill width="45" height="25" /> Home
            </Nav.Link>
            <Nav.Link href="#" className="d-flex align-items-center ps-0">
              <BookFill width="45" height="25" /> Your Library
            </Nav.Link>
            {/* Search */}
            <div className="mt-3">
              <InputGroup>
                <Form.Control type="text" placeholder="Search" aria-label="Search" />
                <Button variant="outline-secondary" size="sm">
                  GO
                </Button>
              </InputGroup>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
      {/* Bottom Section */}
      <div className="nav-btn">
        <Button className="signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="login-btn" type="button">
          Login
        </Button>
        <div className="d-flex justify-content-center gap-1 nav-link-hover">
          <Nav.Link href="#">Cookie Policy</Nav.Link>|<Nav.Link href="#"> Privacy</Nav.Link>
        </div>
      </div>
    </Navbar>
  );
};
export default Sidebar;

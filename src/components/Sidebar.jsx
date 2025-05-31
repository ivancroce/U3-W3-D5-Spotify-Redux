import { Button, Container, Form, Image, InputGroup, Nav, Navbar } from "react-bootstrap";
import logo from "../../public/assets/logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../redux/actions/musicAction";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchSearchResults(search));
  };

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
            <NavLink
              to="/"
              className={({ isActive }) => "d-flex align-items-center ps-2 my-2 nav-link " + (isActive ? "text-white fw-bold" : "text-secondary")}
            >
              {({ isActive }) => (
                <>
                  <HouseDoorFill width="25" height="25" fill={isActive ? "white" : "gray"} className="me-2" />
                  Home
                </>
              )}
            </NavLink>

            <NavLink
              to="/library"
              className={({ isActive }) => "d-flex align-items-center ps-2 my-2 nav-link " + (isActive ? "text-white fw-bold" : "text-secondary")}
            >
              {({ isActive }) => (
                <>
                  <BookFill width="25" height="25" fill={isActive ? "white" : "gray"} className="me-2" />
                  Your Library
                </>
              )}
            </NavLink>

            {/* Search */}
            <Form
              className="mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch();
              }}
            >
              <InputGroup>
                <Form.Control type="text" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
                <Button onClick={handleSearch} variant="outline-secondary" size="sm">
                  GO
                </Button>
              </InputGroup>
            </Form>
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

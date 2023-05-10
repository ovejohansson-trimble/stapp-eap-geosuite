import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import GeosuiteLogo from "../../assets/Geosuite_Logo.svg";

const MainNavigation = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="light" variant="light">
      <Navbar.Brand as={Link} to="/">
        <img
          src={GeosuiteLogo}
          alt="logo"
          width="150px"
          height="30px"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Overview
          </Nav.Link>
          <Nav.Link as={Link} to="/releasenotes">
            Release notes
          </Nav.Link>
          <Nav.Link as={Link} to="/feedback">
            Feedback
          </Nav.Link>
          <Nav.Link as={Link} to="/faq">
            FAQ
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNavigation;

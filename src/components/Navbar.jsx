import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navb() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="brand" href="/">
          Krister Borg Tattoo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Hem</Nav.Link>
            <Nav.Link href="gallery">Galleri</Nav.Link>
            <Nav.Link href="contact">Kontakt</Nav.Link>
            <Nav.Link href="aftercare">Skötselråd</Nav.Link>
            <Nav.Link href="faq">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navb;

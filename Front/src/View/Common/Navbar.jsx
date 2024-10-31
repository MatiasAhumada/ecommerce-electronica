import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navb = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Nombre App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Iniciar Sesion</Nav.Link>
            <Nav.Link href="#link">Registrate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Navb;
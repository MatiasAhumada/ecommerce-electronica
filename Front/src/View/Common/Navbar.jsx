import { Button, Col, Container, Dropdown, DropdownButton, Nav, Navbar, NavbarCollapse, NavDropdown, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navb = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Servicio Tecnico
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="btn-desp" className="bg-white" />
        <Navbar.Collapse id="btn-desp">
          <Nav className="me-auto w-100">
            <Row className="w-100">
              <Col lg={9} sm={12} md={12} className="d-lg-flex">
                <DropdownButton title="Funciónes" className="mt-3">
                  <Dropdown.Item as={Link} to="/cargaequipo">Recepcionar Equipo</Dropdown.Item>
                  <Dropdown.Item href="#action/3.1">Entregar Equipo</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/cobro">Cobrar</Dropdown.Item>
                  <Dropdown.Item as={Link} to="/equipos">Equipos</Dropdown.Item>
                </DropdownButton>
              </Col>
              <Col lg={2} sm={12} className="mt-2">
                <Button as={Link} to="/login">
                  Iniciar Sesion
                </Button>
              </Col>
              <Col lg={1} sm={12} className="mt-2">
                <Button as={Link} to="/register">
                  Registrate
                </Button>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;

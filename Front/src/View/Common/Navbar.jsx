import { Button, Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
const Navb = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-white">
          Nombre App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Row className="w-100">
              <Col md={9}></Col>
              <Col md={2} xs={12}>
                <Button as={Link} to="/login">Iniciar Sesion</Button>
              </Col>
              <Col md={1} xs={12}>
                <Button as={Link} to="/register">Regitrate</Button>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;

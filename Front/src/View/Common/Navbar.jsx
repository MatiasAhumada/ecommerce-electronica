import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";

const Navb = () => {
  return (
    <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand  href="#home">Nombre App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Row className="w-100"> 
            
              <Col md={9}></Col>
              <Col md={2} xs={12}>
                <Nav.Link href="#home">Iniciar Sesion</Nav.Link>
              </Col>
              <Col md={1} xs={12}>
                <Nav.Link href="#link">Regitrate</Nav.Link>
              </Col>
            </Row>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navb;

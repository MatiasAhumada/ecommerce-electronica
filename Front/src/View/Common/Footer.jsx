import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../CSS/iconos.css";

const Footer = () => {
  return (
    <footer>
      <Row>
        <Col lg={4} sm={12}>
          <div>
            <h5>Preguntas Frecuentes</h5>
          </div>
          <div>
            <div className="mt-2">
              <Link as={Link} to="/qsomos">
               
                ¿Quienes Somos?
              </Link>
            </div>
            <div className="mt-2">
              <Link as={Link} to="/pagos">
                Medios de Pagos
              </Link>
            </div>
            <div className="mt-2">
              <Link as={Link} to="/garantia">
                Politicas de Garantias
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={12}>
          <div>
            <h5>Redes Sociales</h5>
          </div>
          <div>
            <div className="mt-2">
              <a href="#insta">Instagram</a>
            </div>
            <div className="mt-2">
              <a href="#faceb">Facebook</a>
            </div>
            <div className="mt-2">
              <a href="#tiktok">TikTok</a>
            </div>
          </div>
        </Col>
        <Col lg={4} sm={12}>
          <div>
            <h5>Contactano</h5>
          </div>
          <div>
            <div className="mt-2">
              <a href="#insta">WhatsApp</a>
            </div>
            <div className="mt-2">
              <a href="#faceb">Ubicacion</a>
            </div>
            <div className="mt-2">
              <a href="#tiktok">
              <img
                  src="src/assets/email.png"
                  alt="email"
                  className="icono-clase"
                />Gmail</a>
            </div>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;

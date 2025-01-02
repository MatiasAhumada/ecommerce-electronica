import React from "react";
import { Button, Col, Container, Form, InputGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MuestraCobro = () => {
  return (
    <Container className="text-center mt-5 mb-5">
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="cliente">
            <Form.Label>Nombre y Apellido</Form.Label>

            <Form.Control
              type="text"
              disabled
              value=""
              placeholder="Pedro Juarez"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="cliente">
            <Form.Label>Contacto o Email</Form.Label>
            <Form.Control
              type="text"
              disabled
              value=""
              placeholder="3813528658"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>DNI Cliente</Form.Label>
            <Form.Control
              type="number"
              disabled
              value=""
              placeholder="Ej:43026159"
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="Marca">
            <Form.Label>Marca</Form.Label>
            <Form.Control type="text" disabled value="" placeholder="Samsung" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="Modelo">
            <Form.Label>Modelo</Form.Label>
            <Form.Control type="text" disabled value="" placeholder="A54" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="falla">
            <Form.Label>Falla</Form.Label>
            <Form.Control
              type="text"
              disabled
              value=""
              placeholder="Cambio pin de carga"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="descripcion">
            <Form.Label>Descripcion de falla</Form.Label>
            <Form.Control as="textarea" disabled value="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="presupuesto dado">
            <Form.Label>Presupuesto Dado</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="1111"
                disabled
                value=""
              />
            </InputGroup>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="Monto a Cobrar">
            <Form.Label>Monto a Cobrar</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">$</InputGroup.Text>
              <Form.Control
                type="number"
                placeholder="1111"
                disabled
                value=""
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Metodos de pagos</Form.Label>
            <Form.Control
              type="text"
              placeholder="MercadoPago"
              disabled
              value=""
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="falla">
            <Form.Label>Garantia</Form.Label>
            <Form.Control type="text" disabled value="" placeholder="1 año" />
          </Form.Group>
        </Col>
      </Row>
      <Button as={Link} type="submi">
        Imprimir Comprobante
      </Button>
    </Container>
  );
};

export default MuestraCobro;
